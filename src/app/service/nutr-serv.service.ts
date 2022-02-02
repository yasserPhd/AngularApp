import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../food/Food';
import { Observable, ObservableInput } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NutrServService {
//public url:string="https://retoolapi.dev/AgFTsW/data";
public url:string="http://localhost:8080/api/getAllFood";
public urls:string="http://localhost:8080/api/getNutFact?name=";
public orgUrl:string="https://retoolapi.dev/AgFTsW/data";
  constructor(private httpClient:HttpClient) { }
  public getNutrition(page:number, size:number){
    return this.httpClient.get(this.url+"?page="+page+"&size="+size) ;
  
  }
  public getNutByName(mc:string)
  {
      let rst:string="";
     let t:string[]=mc.split(" ");
     for (let i = 0; i < t.length; i++) {
      if(i==0 || i==t.length)
      rst=rst+t[i];
      else
      rst=rst+"%20"+t[i];
     }
     
     console.log("url= "+this.url+"?FoodItem="+rst);
     let food:any=this.httpClient.get(this.url+"?FoodItem="+rst);
    console.log("this is our food "+food);
    return this.httpClient.get(this.url+"?FoodItem="+rst);
  }
  public getNutByLikeName(mc:string)
  {
    
    return this.httpClient.get(this.urls+mc);
  }
  public deleteItem(id:number){
    return this.httpClient.delete(this.orgUrl+"/"+id);
  }
  public addItem(url:any, food:Food)
  {
    return this.httpClient.post(this.orgUrl,food);
  }
  public getItemByid(id:number)
  {
    return this.httpClient.get(this.orgUrl+"/"+id);
  }
  public editItem(id:number, food:Food)
  {
    return this.httpClient.put(this.orgUrl+"/"+id,  food);
  }
  public getNutrByPage(id:number, farray:Food[])
  {
     let result:Food[]=[];
     let start=5*id;
     let end=5*id+5;
     console.log("lenght of data"+farray.length);
    
         result=farray.slice(start,end);
        // console.log("i="+i);
        // result.
       // console.log("element"+j+"="+farray[i].FoodItem);
    
    //  for(var i=0; i < result.length; i++)
    //  console.log("element"+i+"="+result[i]);
    return result;
  }
}

