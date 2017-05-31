import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import{HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(
     private router: Router
    ) {}



}
