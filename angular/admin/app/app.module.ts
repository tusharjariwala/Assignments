import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeComponent } from './employe/employe.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmloyeEditComponent } from './emloye-edit/emloye-edit.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import{HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeComponent,
   
    SideNavComponent,
    ToolbarComponent,
  
    EmloyeEditComponent,
       DepartmentComponent,
       DepartmentEditComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
