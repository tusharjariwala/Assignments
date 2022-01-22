import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subform:NgForm | undefined;
  defaultsub='advanced';
  user={
    email:'',
    scription:'',
    password:'',


  }
  submitted=false;
  onSubmit()
  {
    this.submitted=true;
   this.user.email=this.subform?.value.email;
   this.user.scription=this.subform?.value.subscription;
   this.user.password=this.subform?.value.password;
   
     this.subform?.reset();
  }
}
