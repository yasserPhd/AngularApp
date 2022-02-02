import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginServService } from './service/login-serv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-man-app';
  //logged:boolean=LoginComponent.logged;
  logged:boolean=false;
  //console.log(logged);
 // LoginComponent.
  constructor(public loginService:LoginServService) { 
    //console.log("global variable"+LoginComponent.logged);
  }
}
  

