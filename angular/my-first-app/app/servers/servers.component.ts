import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  
  selector: 'app-servers',
 // template: `<app-server></app-server><app-server></app-server>`,
 templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer=false;
 serverCreationStatus='no server was created!';
 serverName='serverTest';
 serverCreated=false;
servers=['serverTest','serverTest 2']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;

    },2000);
  }

  ngOnInit(): void {
  }
  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was create! name is ' + this.serverName;
  }
  onUpdateServerName(event:any)
  {
    //console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
