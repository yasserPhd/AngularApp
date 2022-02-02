import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../paiement/Paiement';
import { PaimentsComponent } from '../paiments/paiments.component';
import { PaiementServService } from '../service/paiement-serv.service';
import { formatDate } from "@angular/common";
import * as moment from 'moment';
@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {
public paiment:Paiement=new Paiement();
public clientsNames:string[]=[];

  constructor(private payServ:PaiementServService, 
    private activatedRoute:ActivatedRoute, private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {

    this.payServ.getClientsNames().subscribe((names:any)=>{
      this.clientsNames=names;
      // this.clientsNames=names;
      // this.paiment=
      // let d1=this.paiment.date_debut.toDateString();
      
      // let d= moment(d1,"dd/MM/yyyy");
      // let stringvalue = d.format("dd/MM/yyyy"); 
      // this.paiment.date_debut=new Date(stringvalue);
      // console.log("date is"+this.paiment.date_debut);

      
     //  d1= this.datepipe.transform(this.paiment.date_debut, 'dd/MM/yyyy');
     //this.paiment.date_debut=new Date(d1);
      //this.datepipe.transform(this.paiment.date_fin, 'dd/MM/yyyy');
       //console.log("date is"+date);
    },err=>{

    });
  
    let id=this.activatedRoute.snapshot.params['id'];
    //console.log(id);
       this.payServ.getPaymentById(id).subscribe((data:any)=>{
      //   //console.log("object added="+food);
         this.paiment=data;

         //const formattedDate = formatDate(this.paiment.date_debut, format, locale);
         
       },err=> 
       {console.log(err);
      }
       );
     
  }
  onEditPayment(p:Paiement)
  {
    let id=this.activatedRoute.snapshot.params['id'];
    //console.log(id);
      this.payServ.editPaymentById(id, p).subscribe((data:any)=>{
        //this.foods=data;
        //console.log("object added="+food);
        this.paiment=data;
    //this.maDate=this.datePipe.transform(this.paiment.date_debut, 'dd/MM/yyyy');
        this.router.navigateByUrl("/paiments");
      },err=> 
      {console.log(err);}
      );
     
  }

}
