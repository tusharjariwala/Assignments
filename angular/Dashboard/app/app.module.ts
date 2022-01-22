import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from "ng-sidebar";
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeComponent } from './employe/employe.component';
import { DepartmentComponent } from './department/department.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeComponent,
    DepartmentComponent,
    SideNavComponent
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
    SidebarModule.forRoot(),
    

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
