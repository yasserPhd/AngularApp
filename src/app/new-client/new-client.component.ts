import { Component, OnInit } from '@angular/core';
import { AthleteServService } from '../service/athlete-serv.service';
import { Router } from '@angular/router';
import { Athlete } from '../Athlete/Athlete';
import { Coach } from '../Coach.model/Coach';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  selectedFile:string="";
  coaches:any;
  id:any;
  public client:Athlete=new Athlete();
  constructor(private atService:AthleteServService, private coService:CoachServService, private router:Router) { }
  //private food:Food=new Food();
 
  ngOnInit(): void {
  //  this.atService.getAllCoaches(). subscribe((data: any)=>{
    this.coService.getRestCoaches().subscribe((data: any)=>{
    // console.log("added successfully"+rst);
    // this.client=rst;
     this.coaches=data;
       
   },err=> 
   {
     console.log(err);}
   );

  }
  onFileSelected(event:Event){
    //console.log(event);
    let tar:any= event.target;
    this.selectedFile=tar.files[0]['name'];
    console.log(this.selectedFile);
  }
  onChange(e:any)
  {
    let c:any=e.target.value;
    console.log("option selected"+c);
   // let rst=c.split(": ");
    //let nom=rst[1];
     //console.log("name selected "+nom);
    let co:any;
    for(let i=0; i< this.coaches.length; i++)
    {
      if(this.coaches[i].nom==c)
      {
         co=this.coaches[i];
         this.client.coach=co;
         this.id=co.id;
         console.log("found"+co.id);
         //console.log("found"+co.nom);
      }
    }
    
    console.log("object client name ="+this.client.coach.nom);
  }
  OnAddClient(a:Athlete)
  {
    //console.log(a.nom);
    //console.log(this.atService.url);
    a.photo=this.selectedFile;
    console.log("athlete coach object"+a.coach);
    // this.atService.addAthleteNested(a).
    this.atService.addAthleteWithCoachId(this.id,a).
    subscribe((rst: any)=>{
     // console.log("added successfully"+rst);
     this.client=rst;
     //this.atService.addCoachToAth()
       this.router.navigateByUrl("/clients");
        
    },err=> 
    {
      console.log("there is an error");
      console.log(err);}
    );
  }
}

