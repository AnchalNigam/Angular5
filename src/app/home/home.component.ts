import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
 
})
export class HomeComponent implements OnInit {
  

  public allBlogs;
  public authors;
  public category;
  constructor(public blogApiService: BlogApiService, private spinnerService: Ng4LoadingSpinnerService) {

    console.log("Home component constructor called");
    
  }

  ngOnInit() {

    this.spinnerService.show();

    this.allBlogs = this.blogApiService.getAllBlogs().subscribe(
      data => {
        setTimeout(() => {
          this.spinnerService.hide();
          
          this.allBlogs = data["data"];
          this.authors=this.uniqueAuthors(this.allBlogs);
          this.category=this.uniqueCategory(this.allBlogs);
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
      });
      
  }
  //for making first letter capital
  public capital=(a:string):string => {
       return a.charAt(0).toUpperCase()+a.slice(1);
  }; //end

  //for getting unique authors list 
  public uniqueAuthors=(allBlogs):any => {
    let author=[];
      for(let current of allBlogs){
        author.push(current['author']);
    }
    let newAuthor=author.filter((a:any,b:number) => {
        return author.indexOf(a)==b;
    });
    return newAuthor;
   
  }; //end

  //for getting unique category list 
  public uniqueCategory=(allBlogs):any => {
    let category=[];
      for(let current of allBlogs){
        category.push(current['category']);
    }
    let newCategory=category.filter((a:any,b:number) => {
        return category.indexOf(a)==b;
    });
    return newCategory;
   
  }; //end

}
