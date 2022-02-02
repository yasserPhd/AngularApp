import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../service/login-serv.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:LoginServService, private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
   this.service.logOut();
   this.router.navigateByUrl('clients');
  }
  }

