import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,OnDestroy{
id:number;
  private activedSub: Subscription = new Subscription;
  constructor(private route:ActivatedRoute,private userService:UserService) {
    this.id=0;
   }
  ngOnDestroy(): void {
   this.activedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.activedSub=this.route.params.subscribe((params:Params)=>{
      this.id=+params.id;
    });
  }
  onActivate()
  {
    this.userService.activtedEmitter.next(true);
  }
  

}

