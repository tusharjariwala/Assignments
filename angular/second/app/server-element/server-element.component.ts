import { Component, Input, OnInit, ViewEncapsulation,OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srcElement') element: 
  {type:string,name:string,content:string};
  @Input() name:string;
@ViewChild('heading') header:ElementRef;
 @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor(private elRef:ElementRef) { 
    this.element = {type:"",name:"",content:""};
    this.name="";
    this.header= elRef;
    this.paragraph=elRef;

    console.log("constructor called");
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log("ngOnChange called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("Init called");
    console.log("text content:"+this.header.nativeElement.textContent);
    console.log("text content of paragraph:"+this.paragraph.nativeElement.textContent);
    
  }
  ngDoCheck(){
    console.log("ngDocheck called");
  }
  ngAfterContentInit()
  {
    console.log("ngAftercontenetinit called");
    console.log("text content of paragraph:"+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked called");
    }
    ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit()
  {
    console.log("ngAfterViewInit called");
    console.log("text content:"+this.header.nativeElement.textContent);
    }
    ngOnDestroy()
  {
    console.log("ngOnDestroy called");
    }
   
}

