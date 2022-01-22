import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // genders=['male','female'];
  signupForm!: FormGroup;
 forbiddenUsernames=['chris','Anna'];
 user={
  projectname:'',
  email:'',
  status:'',
  
}
submitted=false;
  constructor()
  {
   
  }
ngOnInit()
{
  this.signupForm=new FormGroup({
    'userData':new FormGroup({
      'projectname':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email])
      // ,this.forbiddenEmails
    }),
    'status':new FormControl('Stable'),
   
  });
  // this.signupForm.valueChanges.subscribe(
  //   (value)=>console.log(value)
  // );
  this.signupForm.statusChanges.subscribe(
    (status)=>console.log(status)
  );
  
}
onSubmit()
{
  // console.log(this.signupForm);
  this.submitted=true;
  this.user.projectname=this.signupForm?.value.userData.username;
 this.user.email=this.signupForm?.value.userData.email;
 this.user.status=this.signupForm?.value.status;
 
  this.signupForm.reset();
}


forbiddenNames(control:FormControl): {[s:string]:boolean}
{
  if(this.forbiddenUsernames.indexOf(control.value)!==-1)
  {
    return{'nameIsForbidden':true};

  }
 return{'nameIsForbidden':false};
 
}


forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
  const promise=new Promise<any>((resolve,reject)=>
  {
    setTimeout (()=>{
      if(control.value==='test@test.com')
      {
        resolve({'emailIsForbidden':true});

      }
      else{
        resolve(null);

      }
    },1500);
  });
  return promise;
}
}
