import { Component, Input } from '@angular/core';

// Importação do service 
import { EmployeeApiService } from 'src/app/service/employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.css']
})
export class EmployeeInsertComponent {
  // Definir o titulo do comp
  titleComp: string = 'Inserir um registro'

  //Criar uma prop para receber os valores que serão recebidos a partir da view 
  @Input() insertRegister ={
    name: '',
    date: 0
  }
  // definir a DI das classes Service e Router 
  constructor(
    private emplApi: EmployeeApiService,
    private routing: Router
  ){}

  // criar um metodo para acessar o service e enviar os dados para a tarefa assincrona
  insertOneregister(): any{
    //chamada da DI
    this.emplApi.insertRegister(this.insertRegister).subscribe(()=>{
      this.routing.navigate(['/employee-list'])
    })
  }
}
