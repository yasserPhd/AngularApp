import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coach } from '../Coach.model/Coach';
@Injectable({
  providedIn: 'root'
})
export class CoachServService {
  public url:string="http://localhost:8080";
  public RestUrl:string="http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }
  public getCoaches(page:number, size:number){
    return this.httpClient.get(this.url+"/coaches?page="+page+"&size="+size) ;

  }
  public getRestCoaches()
  {
    return this.httpClient.get(this.RestUrl+"/search/coaches");
  }
  public getCoachByKeword(page:number, size:number, mc:string){
    return this.httpClient.get(this.url+"/coaches/search/CoachKeywordPage?mc="+mc+"&page="+page
    +"&size="+size) ;

  }
  public getCoachById(id:number)
  {
    return this.httpClient.get(this.url+"/coaches/"+id);
  }
  public addCoach(coach:Coach)
  {
    return this.httpClient.post(this.url+"/coaches", coach);
  }
 
  public addAuthCoach(coach:Coach)
  {
    let username="ADMIN";
    let password="pass1986";
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Coach>(this.url+"/coaches", coach,{headers});
}
  public deleteCoach(url:any)
  {
    return this.httpClient.delete(url);
  }
  editCoachById(id:number, coach:Coach)
  {
    return this.httpClient.put(this.url+"/coaches/"+id, coach);
  
  }
  
 
}
