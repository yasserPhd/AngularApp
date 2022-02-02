import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../service/login-serv.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string="";
  public password:string="";
 public  logged:boolean=false;
  message: any;
  constructor(private service:LoginServService, private router:Router
    ,private appcomponent:AppComponent) { }

  ngOnInit(): void {
    console.log("on init"+this.logged);
  }
  DoLogin()
  {
  
  // this.service.login(this.username, this.password)
  this.service.authenticate(this.username, this.password)
   .subscribe(data =>
    {
       this.message=data;
       this.logged=true;
       this.appcomponent.logged=true;
       //console.log(LoginComponent.logged);
      // sessionStorage.setItem('username', this.username)
      // this.logged=this.isUserLoggedIn();
       //console.log(this.logged);
       this.router.navigateByUrl("/clients");
    },err=>{
        console.log(err);
       this.logged=false;
    });
 
  }

  logout() {
    this.service.logOut;
    // .subscribe(data =>
    //   {
    //     this.logged = false;
    //     console.log("logged out");
    //   }
    //   , err =>{
    //     console.log(err);
    //   }
    //   );
   
  }

}
