import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../paiement/Paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementServService {
  path="http://localhost:8080/paiments";

  constructor(private httpClient:HttpClient) { }
  getPaiment(page:number, size:number)
  {
     return this.httpClient.get(this.path+"?page="+page+"&size="+size);
  }
  addPayment(p:Paiement)
  {
     return this.httpClient.post(this.path, p);
  }
  getClientsNames()
  {
    return this.httpClient.get("http://localhost:8080/api/getAllClientNames");
  }
  public deletePayment(url:any)
  {
    return this.httpClient.delete(url);
  }
  public editPaymentById(id:number, paiment:Paiement)
  {
    return this.httpClient.put(this.path+"/"+id, paiment);
  }
  public getPaymentById(id:number)
  {
    return this.httpClient.get(this.path+"/"+id);
  }

  
}
