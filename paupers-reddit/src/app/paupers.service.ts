import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Reddit {
  title: string; 
  link: string; 
  image: string; 
}

@Injectable({
  providedIn: 'root',
})
export class PaupersService {
  public posts: Reddit[] = []; 

  constructor(private http: HttpClient) {}

  urlString: string = 'https://www.reddit.com/r/aww/.json';
  
  getPaupersReddit(){
    return this.http.get(this.urlString).subscribe( 
      (response: any) => { 
        
        const posts = response.data.children; 
        
        for(let post of posts){
          const redditPost: Reddit = {
            title: post.data.title,
            link: "https://reddit.com" + post.data.permalink,
            image: post.data.thumbnail
          }; 
        this.posts.push(redditPost); 
        } 
      }, 
    (error) => console.log(error)); 
  }
}

