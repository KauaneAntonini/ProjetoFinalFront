import { Injectable } from '@angular/core';
// Dependecias: Auxiar na implementação das requisições Http, e omplementação do croo-domain
// auxliar nas operações com os dados 
// vai auxiar na implementação das tarefas assincronas necessarias

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../model/IEmployee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeApiService {
  // aqui vamos estabelecer uma prop que vai receber como valor a url pelo qual a API sera chamada
  apiURLBase: string ="http://localhost:5292/api/Employee"
  // aqui sera feita a injeção de dependencia para a crianção do objeto referencial de requisições
  constructor(private httpReq: HttpClient) { }
  // aqui vamos definir as credenciais de acesso para o cross-domain entre apicações 
  crossAuth = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  // ----AQUI VAMOMS ESTABELECER O FLUXO DE DADOS A PARTIR DA CHAMADA D API NO BACKEND----
  // ====usando as requisições http GET, POST, PUT, DELETE====

  //1º - Estabelecer o metodo http para chamar a api e acessar o metodo que recupera all registros da base 
  GetAllRegister(): Observable<IEmployee>{
    return this.httpReq.get<IEmployee>(this.apiURLBase+ '/EmployeeAll')
  }
  //2º - Estabelecer o metodo para recuperar um unico registro da base
  // fazendo a chamada da api 
  GetOneRegister(id: any): Observable<IEmployee>{
    return this.httpReq.get<IEmployee>(this.apiURLBase+'/EmployeeOne/'+id)
  }
  //3º - aqui vamos estabelecer o metodo requisição/função para inserir dados na base
  insertRegister(recieveData: any): Observable<IEmployee>{
    return this.httpReq.post<IEmployee>(this.apiURLBase+'/EmployeeAdd', JSON.stringify(recieveData), this.crossAuth)
  }
  //4º - estabelecer o metodo para atualizar dados ou autera-los, da base, chamando API
  updateRegister(id: any, otherRegister: any): Observable<IEmployee>{
    return this.httpReq.put<IEmployee>(this.apiURLBase+'//EmployeeUp/'+id, JSON.stringify(otherRegister), this.crossAuth)
  }
  //5º - aqui ser o metodo para excluir um registro, chamando API
  deleteRegister(id: any){
    return this.httpReq.delete<IEmployee>(this.apiURLBase+'/EmployeeDel'+id, this.crossAuth)
  }
  // ________________ tempo de video 1:39:16________________________
}
