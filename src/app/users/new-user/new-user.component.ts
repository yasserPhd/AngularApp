import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from '../user/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    user:User=new User();
    options = [
      "ROLE_USER" ,
      "ROLE_ADMIN" 
    ]
  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.user.active=true;
  }
  getSelectedOption()
  {
    console.log("roles are "+this.user.roles);
  }
  createUser()
  {
    // this.user.userName=user.userName;
    // this.user.password=user.password;
    // this.user.active=true;
    // this.user.roles=user.roles;
    this.user.active=true;
    this.service.addUser(this.user)
    .subscribe((data: any)=>{
      //console.log("role is"+this.user.roles)
     this.router.navigateByUrl("/users");
      // this.users=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
     },err=> 
     {console.log(err);}
     ); 
  }

}
