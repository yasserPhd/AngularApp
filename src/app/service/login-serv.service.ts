import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'});

    //  return this.http.get("http://localhost:8080/",{headers,responseType: 'text' });
  }
  
  // logout()
  // {
  //   return this.http.get("http://localhost:8080/logout");
  // }

  authenticate(username:string, password:string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('http://localhost:8080/',{headers,responseType: 'text' as 'json'}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log("use logged in = "+!(user === null))
    return !(user === null)
  }

  logOut() {
    console.log("attemp to logout");
    sessionStorage.removeItem('username')
    console.log("logged out");
  }
}
