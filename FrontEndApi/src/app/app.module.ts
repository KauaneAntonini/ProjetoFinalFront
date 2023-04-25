import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Dependencias importantes para o projeto 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import do service
import { EmployeeApiService } from './service/employee-api.service';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeUniqueComponent } from './component/employee-unique/employee-unique.component';
import { EmployeeInsertComponent } from './component/employee-insert/employee-insert.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeUniqueComponent,
    EmployeeInsertComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // registro dos modulos dependencia do angular 
    HttpClientModule,
    FormsModule
  ],
  // neste array sera inicializado o service
  providers: [EmployeeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
