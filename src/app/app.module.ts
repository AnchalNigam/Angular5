import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogApiService } from './blog-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    EditBlogComponent,
    CreateBlogComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    SortPipe,
    AuthorComponent,
    CategoryComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateBlogComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'blog/:blogId',
        component:BlogViewComponent
      },
      {
        path:'edit/:blogId',
        component:EditBlogComponent
      },
      {
        path:'author/:authorName',
        component:AuthorComponent
      },
      {
        path:'category/:categoryName',
        component:CategoryComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [BlogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
