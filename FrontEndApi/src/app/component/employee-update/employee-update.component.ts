import { Component, OnInit } from '@angular/core';
//Impoprtar o service , classes e rotas
import { EmployeeApiService } from 'src/app/service/employee-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit{
  // definir titulo do Comp
  titleComp: string='Atualizar registro'

  // criar uma prop para receber dados 
  employeeUpdateData: any = {}
  // definir os objetos literais para as DIs
  constructor(
    private emplApi: EmployeeApiService,
    private routing: Router,
    private copyRoute: ActivatedRoute
  ){}
  // criar uma prop para atuar como copia da rota usada pelo registro 
  copyingRoute: any = this.copyRoute.snapshot.params['id']

  // definir o uso do Angular hook
  ngOnInit(): void {
    this.emplApi.GetOneRegister(this.copyingRoute).subscribe((data: any)=>{
     this.employeeUpdateData = data 
    })
  }
  // criar um metodo para acessar o service que chama API para atualizar os dados 
  upEmployeeRegister(): any{
    // chamar a DI
    this.emplApi.updateRegister(this.employeeUpdateData.id, this.employeeUpdateData).subscribe(()=>{
      this.routing.navigate(['/employee-list'])
    })
  }
}
