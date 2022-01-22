import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription} from 'rxjs';
import{ map, filter } from 'rxjs/operators';
// import { setInterval } from 'timers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private fristObsSubscription!: Subscription;
  constructor() { 
    
  }

  ngOnInit(): void {
  //  this.fristObsSubscription= interval( period : 1000).subscribe( next :count =>{
  //     console.log(count);
  //   });
  const customIntervalObservable=Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }): void=>{
    let count=0;
    setInterval(()=>{
      observer.next(count);
      if(count===5)
      {
        observer.complete();
      }
      if(count>3)
      {
        observer.error(new Error('Count is greater 3'));
        
      }
      count++;
    },1000);
    });

    this.fristObsSubscription=customIntervalObservable.pipe(filter(data=>{
      return data as number>0;
    }),
    map((data:number)=>{
      return 'Round:' +(data+1);
    })).subscription((data: any)=>{
          console.log(data);
        },(error: { message: any; }) =>{
          console.log(error);
          alert(error.message);
        },()=>{
          console.log('Completed!');

        });

  }
 ngOnDestroy():void
 {
   this.fristObsSubscription.unsubscribe();
 }
}





