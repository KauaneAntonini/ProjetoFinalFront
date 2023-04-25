import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importar o componente 
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeUniqueComponent } from './component/employee-unique/employee-unique.component';
import { EmployeeInsertComponent } from './component/employee-insert/employee-insert.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

const routes: Routes = [
  // proprieades do path
  {path:'employee-list', component:EmployeeListComponent},
  {path: 'employee-unique/:id', component:EmployeeUniqueComponent},
  {path: 'employee-insert', component:EmployeeInsertComponent},
  {path: 'employee-update/:id', component:EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
