import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/employee/employee.component';
import { AssignComponent } from './components/assign/assign.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EmployeeComponent,
    AssignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
