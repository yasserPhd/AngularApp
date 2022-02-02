import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from '../Athlete/Athlete';
import { Coach } from '../Coach.model/Coach';

@Injectable({
  providedIn: 'root'
})
export class AthleteServService {
  public url:string="http://localhost:8080";
  public urlApi:string="http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }
  public getAthletes(page:number, size:number){
    return this.httpClient.get(this.url+"/athletes?page="+page+"&size="+size) ;

  }
  public getAthleteByKeword(page:number, size:number, mc:string){
    return this.httpClient.get(this.url+"/athletes/search/KeywordPage?mc="+mc+"&page="+page
    +"&size="+size) ;
    

  }
  public getAthleteById(id:number)
  {
    return this.httpClient.get(this.url+"/athletes/"+id);
  }
  public ediAthleteById(id:number, athlete:Athlete)
  {
    return this.httpClient.put(this.url+"/athletes/"+id, athlete);
  }
  public editAthleteByIdRest(id:number,athlete:Athlete)
  {
    return this.httpClient.put(this.urlApi+"/athletes/update/"+id,athlete);
  }
  public getAthleteByIdRest(id:number)
  {
    return this.httpClient.get(this.urlApi+"/search/athletes/"+id);
  }
  public deleteObject(url:any)
  {
    return this.httpClient.delete(url);
  }
  public deleteById(id:number)
  {
    return this.httpClient.delete(this.url+"/athletes/"+id);
  }
  public addAthlete(athlete:Athlete)
  {
    return this.httpClient.post(this.url+"/athletes",athlete);
  }
  public addAthleteNested(athlete:Athlete)
  {
    return this.httpClient.post(this.urlApi+"/addAthlete",athlete);
  }
  public addCoachToAth(athId:number,coach:Coach)
  {
      return this.httpClient.put(this.url+"/api/athletes/"+athId,coach);
  }
  public getAllCoaches()
  {
    return this.httpClient.get(this.url+"/coaches");
  }
  public addAthleteWithCoachId(Coid:number, a:Athlete)
  {
    return this.httpClient.put(this.urlApi+"/coaches/addAthlete/"+Coid,a);
  }
  public editAthleteWithCoach(coid:number, aid:number)
  {
    return this.httpClient.get(this.urlApi+"/"+coid+"/EditAthlete/"+aid);
  }
 
}
