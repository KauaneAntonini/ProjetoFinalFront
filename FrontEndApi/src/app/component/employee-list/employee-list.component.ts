import { Component, OnInit } from '@angular/core';

// Importação referencia do service 
import { EmployeeApiService } from 'src/app/service/employee-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //definir um titulo p/ component
  titleComp: string = 'Lista de Funcionanrios'
  //1-  definindo a prop pra receber valor da chamada do service
  employeeList: any = []
  //2- praticar a referencia do service para fazer uso da DI 
  constructor(private emplApi: EmployeeApiService){}

  //3- hook ngOnInit para "priorizar o carregment de conteudo" de component
  ngOnInit(): void {
    this.showRegisters()
  }

  //4- criar um metodo para acessar o service que possui a tarefa assincrona que recupera todos os registros da base
  showRegisters(): any{
    // chamar a DI para acessar o service ->que chama API-> acessa a base e traz o registro
    this.emplApi.GetAllRegister().subscribe((data:{})=>{
      this.employeeList = data
    })
  }
  // 5- criar um metodo para acessar o service que possui a tarefa assincrona para exclusão de um registro
  delemployeeRegister(id: any): any{
    // vefificar se usuario realmente deseja excluir o registro 
    if(confirm('Deseja realmente excluir este registro?')){
      this.emplApi.deleteRegister(id).subscribe(() =>{
        this.showRegisters()
      })
    }
  }
}
