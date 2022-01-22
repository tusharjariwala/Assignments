import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DepartmentComponent } from "./department/department.component";
import { EmployeComponent } from "./employe/employe.component";



const routes:Routes=[
{path:"",component:DashboardComponent},
{path:"employe",component:EmployeComponent},
{path:"department",component:DepartmentComponent}



];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],

})
export class AppRoutingModule{}
