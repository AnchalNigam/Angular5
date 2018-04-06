import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public author=[];
  constructor(public blogApiService: BlogApiService,private _route:ActivatedRoute,private router:Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    let author=this._route.snapshot.paramMap.get('authorName');
    
    this.spinnerService.show();
    this.author=this.blogApiService.getAuthorsBlog(author).subscribe(
      data => {
        setTimeout(() => {
          this.spinnerService.hide();
          
          this.author = data["data"];
         console.log(this.author)
        }, 2000);


      },
      error => {
        console.log(error.errorMessage);
      });
     
  }

}
