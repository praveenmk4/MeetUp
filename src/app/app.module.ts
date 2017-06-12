import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
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

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { GroupsComponent,DialogResultExampleDialog } from './groups/groups.component';
import { RegisterComponent } from './register/register.component';
import { CreateGroupComponent } from './create-group/create-group.component';


//services List
import{GroupsListService} from './groups-list.service';
import{ParticipantsService} from './participants.service';
import { UserAuthService } from  './user-auth.service';

const ROUTES = [
   {
    path: '',component: LandingComponent,},
    {path:'home',
    component: HomeComponent
  
  },
 
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
  ,
    
];
const childRoutes = [
  {path:'home',
    component: HomeComponent,
     children: [
              { path: '',
                component: DashboardComponent},
              {
                path:'dashboard',
                component:DashboardComponent
             },{
                path:'settings',
                component:SettingsComponent
             },
              {
                path:"eventCreation",
                component:EventCreationComponent
              },
              {
                path:"groups",
                component:GroupsComponent,
               },
                {
                path:"groupCreation",
                component:CreateGroupComponent
              }
            
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SettingsComponent,
    EventCreationComponent,
    LoginComponent,
    LandingComponent,
    GroupsComponent,
    RegisterComponent,
    CreateGroupComponent  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(ROUTES),
     RouterModule.forChild(childRoutes),
    MaterialModule,

     BrowserAnimationsModule
     
      ],

  providers: [ParticipantsService,GroupsListService,UserAuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
