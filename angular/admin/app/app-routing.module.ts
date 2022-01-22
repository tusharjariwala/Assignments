import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import { DepartmentComponent } from "./department/department.component";

import { EmloyeEditComponent } from "./emloye-edit/emloye-edit.component";
import { EmployeComponent } from "./employe/employe.component";

const routes:Routes=[

     { path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'employe',component:EmployeComponent},
   {path:'employe-edit',component:EmloyeEditComponent},
   {path:'employe-ed/:id',component:EmployeComponent},
   {path:'department',component:DepartmentComponent},
   {path:'department-edit',component:DepartmentEditComponent},
   {path:'department-ed/:id',component:DepartmentComponent} 
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule{}
