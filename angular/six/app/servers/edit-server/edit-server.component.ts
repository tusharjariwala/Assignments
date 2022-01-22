import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
server:{id:number,name:string,status :string};
serverName='';
serverStatus='';
allowEdit=false;

  constructor(private serverService:ServerService,private route:ActivatedRoute) { 
    this.server={id:0,name:'',status:''};
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit=queryParams['allowEdit'] ==='1' ?true:false;
      }
    );
    this.route.fragment.subscribe();

    //this.server=this.serverService.getServer(1);
    this.serverName=this.server.name;
    this.serverStatus=this.server.status;
    

  }
  onUpdateServer()
  {
    this.serverService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
  }

}
