import { Component, OnInit } from '@angular/core';
import { EmployeData } from '../model/employeData';
import { insertemployeRespone } from '../model/insertemployeRespone';
import { showEmployeRespone } from '../model/showEmployeRespone';
import { RestApi } from '../service/RestApi.service';

@Component({
  selector: 'app-emloye-edit',
  templateUrl: './emloye-edit.component.html',
  styleUrls: ['./emloye-edit.component.css']
})
export class EmloyeEditComponent implements OnInit {
  employeList:EmployeData[] |undefined;
  //departmnetList:DepartmentData[] |undefined;
  listRespone:showEmployeRespone|undefined;
  insertRespone:insertemployeRespone|undefined;
  constructor(public service:RestApi) { }

  ngOnInit(): void {
    this.showEmployeList();
  }
  showEmployeList()
  {
    this.service.getEmployeList()
    .subscribe(res=>{
      console.log(res);
      this.listRespone=res as showEmployeRespone;
      this.employeList=this.listRespone.data;
    //  this.departmnetList=this.listRespone.data;
    },err=>{
      console.log(err);
    });
  }
  deleteemploye(id:number)
  {
    console.log("employe ID :::::"+id);
    if(confirm('Are You sure to delete this'))
    {
      this.service.deleteemploye(id).subscribe(res=>{
        console.log(res);
        this.insertRespone=res as insertemployeRespone;
        this.showEmployeList();
      },err=>{
        console.log(err);
      });
    }
  }
}
