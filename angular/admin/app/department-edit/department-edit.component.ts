import { Component, OnInit } from '@angular/core';
import { DepartmentData } from '../model/departmentData';
import { insertRespone } from '../model/insertRespone';
import { showDepartmentRespone } from '../model/showDepartmentRespone';
import { RestApi } from '../service/RestApi.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
departmnetList:DepartmentData[] |undefined;
listRespone:showDepartmentRespone|undefined;
insertRespone:insertRespone|undefined;
  constructor(public service:RestApi) { }

  ngOnInit(): void {
   this.showDepartmentList();
  }
  
  showDepartmentList()
  {
    this.service.getDepartmentList()
    
    .subscribe(res=>{
      console.log(res);
      this.listRespone=res as showDepartmentRespone;
      this.departmnetList=this.listRespone.data;
    },err=>{
      console.log(err);
    });
  }

  deleteDepartment(id:number)
  {
    console.log("Dept ID :::::"+id);
    if(confirm('Are You sure to delete this'))
    {
      this.service.deleteDepartment(id).subscribe(res=>{
        console.log(res);
        this.insertRespone=res as insertRespone;
        this.showDepartmentList();
      },err=>{
        console.log(err);
      });
    }
  }

}
