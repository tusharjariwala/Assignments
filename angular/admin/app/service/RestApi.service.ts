import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DepartmentData } from "../model/departmentData";
import { EmployeData } from "../model/employeData";

@Injectable({providedIn:'root'})
export class RestApi{

    constructor(private http:HttpClient){}
   readonly baseUrl="http://localhost:41565/api/Admin/"
   
   getDepartmentList():Observable<any>{
    return this.http.get(this.baseUrl+"getDepartmentList")
}
   getDepartment(id:number):Observable<any>{
       return this.http.get(this.baseUrl+"getDepartment/"+id)
   }
  
   getDepartmentInsert(department:DepartmentData):Observable<any>{
    return this.http.post(this.baseUrl+"addDepartment",department);
   }
   getDepartmentUpdate(department:DepartmentData):Observable<any>{
    return this.http.post(this.baseUrl+"updateDepartment",department);
   }

   deleteDepartment(id:number):Observable<any>{
       return this.http.delete(this.baseUrl+"deleteDepartment/"+id);
   }
   getEmployeList():Observable<any>{
    return this.http.get(this.baseUrl+"getEmployelist")
   }
  getEmploye(id:number):Observable<any>{
     return this.http.get(this.baseUrl+"getEmploye/"+id)
 }
 
 getEmployeInsert(Employe:EmployeData):Observable<any>{
    return this.http.post(this.baseUrl+"addemploye",Employe);
   }
   getEmployeUpdate(Employe:EmployeData):Observable<any>{
    return this.http.post(this.baseUrl+"updateemploye",Employe);
   }
   deleteemploye(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"deleteemploye/"+id);
}

 
}