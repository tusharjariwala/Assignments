import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentData } from '../model/departmentData';
import { EmployeData } from '../model/employeData';
import { getDepartmentRespone } from '../model/getDpartmentRespone';
import { getEmployeRespone } from '../model/getEmployeRespone';
import { insertemployeRespone } from '../model/insertemployeRespone';

import { showDepartmentRespone } from '../model/showDepartmentRespone';

import { RestApi } from '../service/RestApi.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  @ViewChild('f') slForm:NgForm | undefined;
  subscription:Subscription | undefined
  recipeForm!: FormGroup;
  editMode=false;
   DepartmentRespone:getDepartmentRespone|undefined;
  departmentList!:DepartmentData[];
  listrespone!:showDepartmentRespone;
  empResponse!:getEmployeRespone;
  insertRespone!:insertemployeRespone;
  employeData:EmployeData=
    {
      emp_id: 0,
      emp_name: "",
      depart_id: '',
      date_joining: "",
      designation: "",
      qulifiction: "",
      isActive: 0,
      department: {
          dept_id:0,
          dept_name: "",
          isactive: 0
      }
  };
  
  emp_id=0;
  
 
  constructor(public service:RestApi,private route:ActivatedRoute,private router:Router) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.emp_id=params['id'];
    });
    this.getDepartment();
    if(this.emp_id==0||this.emp_id==undefined)
    {
      this.employeData=new EmployeData();
    }
    else{
      console.log();
      this.getEmploye();
    }
  }
  getDepartment(){
  
    this.service.getDepartmentList().subscribe(res=>{
      this.listrespone=res as showDepartmentRespone;
      this.departmentList=this.listrespone.data;
    },err=>{
      console.log(err);
    });
  }
 
  getEmploye(){
    console.log("emp ID:"+this.emp_id);
    this.service.getEmploye(this.emp_id).subscribe(res=>{
      console.log(res);
      this.empResponse=res as getEmployeRespone;
      this.employeData=this.empResponse.data;
    },err=>{
      console.log(err);
    });
  }
  compareFn(c1:any,c2:any):boolean
  {
   return c1 &&c2 ?c1.id ===c2.id: c1===c2;
  }
  onSubmit(form:NgForm)
  { 
    console.log("Employ ID:"+this.emp_id);
    if(this.emp_id==0||this.emp_id==undefined)
    {
      this.insertEmployeDetails(form);
    }
    else{
      this.updateEmployeDetails(form);
    }
  }
  insertEmployeDetails(form:NgForm)
  {
    this.service.getEmployeInsert(this.employeData).subscribe(res=>{
      this.insertRespone=res as insertemployeRespone;
      if(this.insertRespone.result=="success")
      {
        this.resetForm(form);
        this.router.navigate(['/employe-edit'],{relativeTo:this.route});
      }
      else{
        console.log(res);
      }

    },err=>{
      console.log(err);
    });
  }
  updateEmployeDetails(form:NgForm)
  {
    this.service.getEmployeUpdate(this.employeData).subscribe(res=>{
      this.insertRespone=res as insertemployeRespone;
      if(this.insertRespone.result=="success")
      {
        this.resetForm(form);
        this.router.navigate(['/employe-edit'],{relativeTo:this.route});
      }
      else{
        console.log(res);
      }

    },err=>{
      console.log(err);
    });
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.employeData=new EmployeData();
  }
  onClear()
  {
    this.slForm?.reset();
    this.editMode=false;
  }

}
