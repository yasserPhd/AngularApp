import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenificeService {
path:string="http://localhost:8080/api/GetBenifice";
  constructor(private httpClient: HttpClient) { }
  getBenifice()
  {
     return this.httpClient.get(this.path);
  }
}
