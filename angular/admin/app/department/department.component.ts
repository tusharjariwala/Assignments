import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepartmentData } from '../model/departmentData';
import { getDepartmentRespone } from '../model/getDpartmentRespone';
import { insertRespone } from '../model/insertRespone';
import { showDepartmentRespone } from '../model/showDepartmentRespone';
import { RestApi } from '../service/RestApi.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('f') slForm:NgForm | undefined;
  editMode=false;
  DepartmentRespone:getDepartmentRespone|undefined;
  insertRespone!:insertRespone;
departmentData:DepartmentData={
  dept_id: 0,
  dept_name: "",
  isactive: 1
};
dept_id= 0;
constructor(private service:RestApi,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.dept_id=params['id'];
    });
    if(this.dept_id==0||this.dept_id==undefined)
    {
      this.departmentData=new DepartmentData();
    }
    else{
      console.log();
      this.getDepartment();
    }
  }
  getDepartment(){
    console.log("Dept ID:"+this.dept_id);
    this.service.getDepartment(this.dept_id).subscribe(res=>{
      this.DepartmentRespone=res as getDepartmentRespone;
      this.departmentData=this.DepartmentRespone.data;
    },err=>{
      console.log(err);
    });
  }
  onSubmit(form:NgForm)
  { 
    console.log("Dept ID:"+this.dept_id);
    if(this.dept_id==0||this.dept_id==undefined)
    {
      this.insertDetails(form);
    }
    else{
      this.updateDetails(form);
    }
  }
  insertDetails(form:NgForm)
  {
    this.service.getDepartmentInsert(this.departmentData).subscribe(res=>{
      this.insertRespone=res as insertRespone;
      if(this.insertRespone.result=="success")
      {
        this.resetForm(form);
        this.router.navigate(['/department-edit'],{relativeTo:this.route});
      }
      else{
        console.log(res);
      }

    },err=>{
      console.log(err);
    });
  }
  updateDetails(form:NgForm)
  {
    this.service.getDepartmentUpdate(this.departmentData).subscribe(res=>{
      this.insertRespone=res as insertRespone;
      if(this.insertRespone.result ==="success")
      {
        this.resetForm(form);
        this.router.navigate(['/department-edit'],{relativeTo:this.route});
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
    this.departmentData=new DepartmentData();
  }
  onClear()
  {
    this.slForm?.reset();
    this.editMode=false;
  }
}
