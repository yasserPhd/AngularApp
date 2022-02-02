import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../service/user-service.service';
import { User } from './user/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[]=[];
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.GetAllUsers();
  }
  GetAllUsers()
  {
    this.service.getUsers()
    .subscribe((data: any)=>{
       this.users=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
     },err=> 
     {console.log(err);}
     );
  }
  deleteUser(id:number)
  {
    this.service.DeleteUser(id)
    .subscribe((data: any)=>{
      this.GetAllUsers();
      // this.users=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
     },err=> 
     {console.log(err);}
     );
  }

}
