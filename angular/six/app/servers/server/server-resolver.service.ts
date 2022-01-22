import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerService } from "./server.service";

interface Server{
    id:number;
    name:string;
    status:string;
}
@Injectable()

export class ServerResolver implements Resolve<Server>
    {
        constructor(private serversService:ServerService){}

       resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Server> | Promise<Server>| Server    
       {
           return this.serversService.getServer(+route.params['id']) as { id:number;
            name:string;
            status:string;};

       }
    }