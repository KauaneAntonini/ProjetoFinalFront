import { Component, OnInit } from '@angular/core';
// Impotação do service
import { EmployeeApiService } from 'src/app/service/employee-api.service';  
// importação da classe ActivateRoute } from 'src/app/service/employee-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-unique',
  templateUrl: './employee-unique.component.html',
  styleUrls: ['./employee-unique.component.css']
})
export class EmployeeUniqueComponent implements OnInit {
  // definir um titulo para o componente
  titleComp: string ='Detalhe da vaga do funcionario'

  // criar uma prop para ser o elemento logico que recebera os valores das props do Registro
  employeeUniqueRegister: any = {}

  // praticar a referencia de instancia das classes service e activateRoute
  constructor(
    private emplApi: EmployeeApiService,
    private copyRoute: ActivatedRoute
  ){}

  //fazer a copia 
  copyingRoute: any = this.copyRoute.snapshot.params['id']

  // implementar o angular hook
  ngOnInit(): void {
    this.oneRegister
  }

  // criar uma metodo para acessar o service que possui a tarefa assincrona 
  // recupera um unico registro devidamente identificado 
  oneRegister(): any{
    // chamar a DI para trazer os valores do registro selecionado 
    this.emplApi.GetOneRegister(this.copyingRoute).subscribe((data:{})=>{
      this.employeeUniqueRegister = data 
    })
  }
}
