import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  public currentBlog;
  constructor(public blogApiService: BlogApiService,private _route:ActivatedRoute,private router:Router,private spinnerService: Ng4LoadingSpinnerService) { }
  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public categories=["Food","Fashion","Technical"];
  ngOnInit() {
    let blogId=this._route.snapshot.paramMap.get('blogId');
    this.spinnerService.show();
    this.blogApiService.getCurrentBlog(blogId).subscribe(
      data => {
        setTimeout(() => {
         
          this.spinnerService.hide();
          this.currentBlog = data["data"];
          console.log(this.currentBlog)
          console.log(this.currentBlog.blogId);
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
      });
     

  }

  //method to edit the blog
  public editThisBlog=():any => {
   
    this.blogApiService.editThisBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data => {
        
        alert('Blog Edited successfully!');
        setTimeout(() => {
         
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
        
      });
  };

}
