import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category=[];
  constructor(public blogApiService: BlogApiService,private _route:ActivatedRoute,private router:Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    let category=this._route.snapshot.paramMap.get('categoryName');
   
    this.spinnerService.show();
    this.category=this.blogApiService.getCategoryBlog(category).subscribe(
      data => {
        setTimeout(() => {
          this.spinnerService.hide();
          
          this.category = data["data"];
         
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
      });
    
  }

}
