import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from '../Coach.model/Coach';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-new-coach',
  templateUrl: './new-coach.component.html',
  styleUrls: ['./new-coach.component.css']
})
export class NewCoachComponent implements OnInit {
coach:Coach=new Coach();
selectedFile:string="";
  constructor(private router:Router, private coServ:CoachServService) { }
   
  ngOnInit(): void {
  }
  onFileSelected(event:Event){
    //console.log(event);
    let tar:any= event.target;
    this.selectedFile=tar.files[0]['name'];
    console.log(this.selectedFile);
  }
  OnAddCoach(c:Coach)
  {
   c.photo=this.selectedFile;
     this.coServ.addCoach(c).
  subscribe((data: any)=>{
     // console.log("added successfully"+rst);
     this.coach=data;
       this.router.navigateByUrl("/coaches");
        
    },err=> 
    {
      console.log(err);}
    );
  }
}
