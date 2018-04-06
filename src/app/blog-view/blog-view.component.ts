import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,public blogApiService: BlogApiService,private _route:ActivatedRoute,private router:Router, private spinnerService: Ng4LoadingSpinnerService) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
     let blogId=this._route.snapshot.paramMap.get('blogId');
     this.spinnerService.show();
     this.currentBlog=this.blogApiService.getCurrentBlog(blogId).subscribe(
      data => {
        setTimeout(() => {
          this.spinnerService.hide();
          
          this.currentBlog = data["data"];
         console.log(this.currentBlog)
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

public deleteBlog=():any => {
  this.blogApiService.deleteThisBlog(this.currentBlog.blogId).subscribe(
    data => {
      this.toastr.success('Blog deleted successfully!','success');
      console.log('deleted');
      alert('Blog Deleted Successfully!');
      setTimeout(() => {
         this.router.navigate(['/home']);
        
      }, 2000);


    },
    error => {
      console.log(error.errorMessage);
      this.toastr.error('Error occured!','Error');
    });
   


 
}

}
