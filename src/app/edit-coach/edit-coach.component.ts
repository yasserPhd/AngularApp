import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../Coach.model/Coach';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-edit-coach',
  templateUrl: './edit-coach.component.html',
  styleUrls: ['./edit-coach.component.css']
})
export class EditCoachComponent implements OnInit {
coach:Coach=new Coach();
selectedFile:string="";
public path="/assets/images/";
  constructor(private activatedRoute:ActivatedRoute, private coServ:CoachServService, private router:Router) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    //console.log(id);
      this.coServ.getCoachById(id).subscribe((data:any)=>{
        this.coach=data;
      },err=>{
        console.log(err);
  
      });
  }
  onFileSelected(event:Event){
    //console.log(event);
    let tar:any= event.target;
    this.selectedFile=tar.files[0]['name'];
    this.coach.photo=this.selectedFile;
    //let files =tar.files;
    console.log(this.selectedFile);
    //console.log("files ="+files.item(0));
  }
  onEditCoach(c:Coach)
  {
    let id=this.activatedRoute.snapshot.params['id'];
    c.photo=this.selectedFile;
    //console.log(id);
      this.coServ.editCoachById(id, c).subscribe((data:any)=>{
        //this.foods=data;
        //console.log("object added="+food);
        this.coach=data;
        this.router.navigateByUrl("/coaches");
      },err=> 
      {console.log(err);}
      );
     
  }

}
