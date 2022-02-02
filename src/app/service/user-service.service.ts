import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../users/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   url="http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }
  getUsers()
  {
  return this.httpClient.get(this.url+"/getAllUsers");
  }
  DeleteUser(id:number)
  {
    return this.httpClient.delete(this.url+"/deleteUser/"+id);
  }
  addUser(user:User)
  {
    return this.httpClient.post(this.url+"/addUser", user);
  }
}
