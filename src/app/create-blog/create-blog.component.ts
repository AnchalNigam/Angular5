import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(public blogApiService: BlogApiService,private _route:ActivatedRoute,private router:Router,private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }
  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public categories=["Food","Fashion","Technical"];

  ngOnInit() {
  }
  
  //method of creating blog
  public createBlog=() :any => {
    let blogData={
      title : this.blogTitle ,
      description : this.blogDescription ,
      blogBody: this.blogBodyHtml,
      category :this.blogCategory

    } //end blog data
    this.blogApiService.createBlog(blogData).subscribe(
      data => {
        
        this.toastr.success('Blog created successfully!', 'Success!');
        setTimeout(() => {
         
          this.router.navigate(['/blog',data.data.blogId]);
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
        this.toastr.error('Some error Occured!', 'Oops!');
      });
      
  }
}
