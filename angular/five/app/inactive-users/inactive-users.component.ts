import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users:string[];
  @Output() userSetToActive=new EventEmitter<number>();
  
  constructor() {
    this.users=['Max','Anna'];
   }

  ngOnInit(): void {
  } 
  onSetToActive(id:number)
  {
   this.userSetToActive.emit(id);
  }

}
