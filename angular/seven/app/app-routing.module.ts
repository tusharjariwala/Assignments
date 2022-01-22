// const appRoutes:Routes=[
//     {path:'' ,component:HomeComponent},
//     {path:'users' ,component:UsersComponent,children:[
//       {path:':id/:name' ,component:UserComponent}
//     ]},
import { NgModule } from "@angular/core";
import { RouterModule} from "@angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UserComponent,children:[
     {path:':id' ,component:UserComponent}
    
]}
];

@NgModule({
    imports:[
        //RouterModule.forRoot(appRoutes,{useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
    })
    export class  AppRoutingModule
    {
    
    }