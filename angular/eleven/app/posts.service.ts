import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject,throwError } from "rxjs";
import { map,catchError,tap } from 'rxjs/operators';
import { Post } from "./post.model";

@Injectable({providedIn :'root'})
export class PostsService{
    error =new Subject<string>();
    constructor(private http:HttpClient)
    {

    }
    createAndStorePost(title:string,content:string)
    {
          const postData:Post={title:title,content:content};

        this.http.post<{name:string}>
        ('https://ng-complete-guide-4b480-default-rtdb.firebaseio.com/posts.json',postData,
          {
            observe: 'response',
            
          }
        ).subscribe(ResponseData=>{
          console.log(ResponseData);
        },
        error=>{
            this.error.next(error.message);
        }
        );
    }
    fetchPosts()
    {
      let serachParams=new HttpParams();
      serachParams=serachParams.append('print','pretty');
      serachParams=serachParams.append('custom','key');
       return this.http.get < {[key:string]:Post} >('https://ng-complete-guide-4b480-default-rtdb.firebaseio.com/posts.json',
       {
        headers:new HttpHeaders({ 'Custom-Header' :'Hello'}),
        params:serachParams,
        responseType:'json'
      }
       )
  .pipe(map(responseData =>{
    const postsArray:Post[]=[];
    for(const key in responseData)
    {
    if(responseData.hasOwnProperty(key))
    {
      postsArray.push({...responseData[key],id:key});
    }
    }
    return postsArray;
  }),
  catchError(errorRes=>{
        return throwError(errorRes);
  })
  ); 
}
  deletePosts()
  {
      return this.http.delete('https://ng-complete-guide-4b480-default-rtdb.firebaseio.com/posts.json',
      {
        observe:'events',
        responseType:'text'
      }
     
      ).pipe(tap(event=>{
        console.log(event);
        
        if(event.type===HttpEventType.Sent)
        {
         
        }
        if(event.type===HttpEventType.Response)
        {
             console.log(event.body);
        }
      })
      );
  }
 
    
}