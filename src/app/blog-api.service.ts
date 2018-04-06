import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class BlogApiService {
  
  public baseUrl="https://blogapp.edwisor.com/api/v1/blogs";
  public myToken="MGE3MWNiYmRhNWQwYjY2YmI5MmRhODA2MmYzOTgyYzZkNWMwYWE4OTBhOGU5ZjUzZmI3M2I5YWY2YWJiNzliM2Q1NWM4NDQyNTFmNjQ4ZDE0Nzg1YjdjMzAxYzY2ZGFlZTViMzQ1ZGNlY2YxYzMzNjA0NTA2ZGYyZDljOTY3MDc3Zjkz";
  constructor(private _http:HttpClient) { 

    console.log("blog api service called");
  }
  //Method to get all blogs info
  public getAllBlogs=():any=>{
    let myResponse=this._http.get(`${this.baseUrl}/all?authToken=${this.myToken}`);
    
    return myResponse;
     
  };
  //Method to get current blog info
  public getCurrentBlog=(currentBlogId):any=>{
    let currentBlog=this._http.get(`${this.baseUrl}/view/${currentBlogId}?authToken=${this.myToken}`);
    return currentBlog;

  };

  //Method to get authors blog info
  public getAuthorsBlog=(authorName):any=>{
    let authorBlogs=this._http.get(`${this.baseUrl}/view/by/author/${authorName}?authToken=${this.myToken}`);
    return authorBlogs;

  };

  //Method to get category blog info
  public getCategoryBlog=(categoryName):any=>{
    let categoryBlogs=this._http.get(`${this.baseUrl}/view/by/category/${categoryName}?authToken=${this.myToken}`);
    return categoryBlogs;

  };

  //Method to create blog
  public createBlog=(blogData):any => {
      let create=this._http.post(this.baseUrl + '/create' + '?authToken=' +this.myToken,blogData);
      return create;
  };

  //method to delete a blog
  public deleteThisBlog=(blogId):any => {
    let data={};
    let deleteBlog=this._http.post(this.baseUrl + "/" + blogId + '/delete' + '?authToken='+ this.myToken,data);
    return deleteBlog;
  }
  //method to edit blog
  public editThisBlog=(blogId,blogData):any => {
    let response=this._http.put(this.baseUrl+"/" + blogId + '/edit' + '?authToken='+ this.myToken,blogData);
    return response;
  }

}
