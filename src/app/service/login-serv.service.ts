import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text' as 'json'
};

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})


export class LoginServService {
   token: any;
 

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
    console.log("inside authentificate");
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const body = { username: username, password: password };
    return this.http.post('http://localhost:8080/api/login', body,{...httpOptions, observe: 'response'}).pipe(
      tap(res => console.log("header"+res.headers.get('Authorization'))),
  map((userData:any) => {
    //userData=JSON.parse(userData)
    console.log("user data with token  :"+JSON.parse(userData.body).token)
    this.token= JSON.parse(userData.body).token;
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('token', this.token);
    return userData;
  })
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
  getToken(){
    return this.token;
  }
}