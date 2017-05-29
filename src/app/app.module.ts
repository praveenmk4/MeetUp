import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import{Provider} from '@angular/core';

import {MaterialModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  


import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { EventCreationComponent } from './event-creation/event-creation.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:"eventCreation",
    component:EventCreationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SettingsComponent,
    EventCreationComponent  
    
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
