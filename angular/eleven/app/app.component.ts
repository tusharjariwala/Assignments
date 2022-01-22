import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
loadedPosts:Post[]=[];
isfetching=false;
error=null;

private errorSub:Subscription | undefined ;
constructor(private http:HttpClient,private postsService:PostsService)
{

}
  ngOnInit()
  {
    this.errorSub=this.postsService.error.subscribe(errorMessage =>{
      // this.error=errorMessage;
    });
    this.isfetching=true;
    this.postsService.fetchPosts().subscribe(
      posts=>{
        this.isfetching=false;
        this.loadedPosts=posts;
      },error=>{
        this.isfetching=false;
        this.error=error.message;
        console.log(error);
         } 

    );
  }
  onCreatePost(postData:Post)
  {
    this.postsService.createAndStorePost(postData.title,postData.content);
  }
onfetchPost()
{
  this.isfetching=true;
  this.postsService.fetchPosts().subscribe(
    posts=>{
      this.isfetching=false;
      this.loadedPosts=posts;
    },error=>{
      this.isfetching=false;
   this.error=error.message;
   console.log(error);
    } 
  );
}
onHandleError()
{
  this.error=null;
}
onClearPosts()
{
   this.postsService.deletePosts().subscribe(()=>{
     this.loadedPosts=[];
   });
}
ngOnDestroy()
{
  this.errorSub?.unsubscribe();
}
}
