import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import{Provider} from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import {MaterialModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  

import { TextQtnsComponent } from './text-qtns/text-qtns.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    AdminComponent,

    TextQtnsComponent,

    DashboardComponent  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(ROUTES),
    MaterialModule,

     BrowserAnimationsModule
      ],

  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
