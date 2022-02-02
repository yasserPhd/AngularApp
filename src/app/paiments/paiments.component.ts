import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from '../paiement/Paiement';
import { PaiementServService } from '../service/paiement-serv.service';

@Component({
  selector: 'app-paiments',
  templateUrl: './paiments.component.html',
  styleUrls: ['./paiments.component.css']
})
export class PaimentsComponent implements OnInit {
   public paiements:any;
   public size:number=6;
   public currentpage:number=0;
   public totalpages:number=0;
   public pages:Array<number>=[];
   //public clientsNames:String[]=[];
  constructor(private paiServ:PaiementServService, private router:Router) { }

  ngOnInit(): void {
    this.OnGetPaiments();
  }
  OnGetPaiments()
  {
     this.paiServ.getPaiment(this.currentpage,this.size).subscribe((data:any)=>
      {
          this.paiements=data;
          this.totalpages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalpages);
          console.log("success");
          console.log(this.paiements[0].nom);
      },err=>{
       console.log(err);
      }
     );
  }
  OnPagePaiment(i:number)
  {
    this.currentpage=i;
    this.OnGetPaiments();
  }
  onDeletePayment(p:any){
    let conf=confirm("Are you sure to delete this athlete?")
    if (conf)
    {
     let url=p._links.self.href;
     console.log("this is url "+p._links.self.href);
    this.paiServ.deletePayment(url).
    subscribe(data=>{
      this.OnGetPaiments();
      console.log("athlete deleted");
    },err=> 
    {console.log("error found"+err);}
    );
  }
}
OnEditPayment(url:string)
{
  let arr:string[]=url.split("/")
  let id=arr[arr.length-1];
  console.log("this id is equal"+id);
   this.router.navigateByUrl("/edit-payment/"+id);


}
}
