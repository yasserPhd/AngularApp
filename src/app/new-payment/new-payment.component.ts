import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from '../paiement/Paiement';
import { PaiementServService } from '../service/paiement-serv.service';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {
  public clientsNames:String[]=[];
  public paiments:Paiement[]=[];
  constructor(private paiServ:PaiementServService, private router:Router) { }

  ngOnInit(): void {
    this.getClientsNames();
  }
  getClientsNames()
  {
    return this.paiServ.getClientsNames().subscribe((data:any)=>
    {
       this.clientsNames=data;
    },err=>{
     console.log(err);
    }
   );
  }
  OnAddPayment(p:Paiement)
  {
    console.log("payment performed");
    return this.paiServ.addPayment(p).subscribe((data:any)=>
    {
       this.paiments=data;
       return this.router.navigateByUrl("/paiments");

    },err=>{
     console.log(err);
    }
   );
  }

}
