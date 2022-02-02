import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from '../Athlete/Athlete';
import { Coach } from '../Coach.model/Coach';
import { AthleteServService } from '../service/athlete-serv.service';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
public athlete:Athlete=new Athlete();
public coaches:any;
public curCoach:any;
public selectedFile:string="";
public path="/assets/images/";
public id:any;
public coName:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private coService:CoachServService, private atService:AthleteServService) { }

  ngOnInit(): void {
   // let url=this.activatedRoute;
    //let id=this.activatedRoute.snapshot.params['id'];
    this.coService.getRestCoaches().subscribe((data: any)=>{
      // console.log("added successfully"+rst);
      // this.client=rst;
       this.coaches=data;
         
     },err=> 
     {
       console.log(err);}
     );
    //let AtUrl=atob(url);
    //console.log(this.activatedRoute.snapshot.params["id"]);
    let id=this.activatedRoute.snapshot.params['id'];
    //console.log(id);
     // this.atService.getAthleteById(id).subscribe((data:any)=>{
      this.atService.getAthleteByIdRest(id).subscribe((data:any)=>{
        this.athlete=data;
        console.log("coach of athlete is"+this.athlete.coach.nom);
        this.coName=this.athlete.coach.nom;
      },err=>{
        console.log(err);
  
      });
        //console.log("object added="+food);
        //this.athlete=data;
  }
  getCoachName(a:Coach)
  {
    //this.athlete.coach=c;
    return a.nom;
  }

  onChange( e:any)
  {
    //console.log(e.value);
     let c:any=e.target.value;
     console.log("name selected ="+c);
     let co:any;
     for(let i=0; i< this.coaches.length; i++)
     {
       if(this.coaches[i].nom==c)
       {
       co=this.coaches[i];
       this.id=co.id;
       }
     }
     this.athlete.coach=co;
     console.log("object ="+this.athlete.coach.nom+"and id="+this.id);
  }
  onFileSelected(event:Event){
    //console.log(event);
    let tar:any= event.target;
    this.selectedFile=tar.files[0]['name'];
    this.athlete.photo=this.selectedFile;
    //let files =tar.files;
    console.log(this.selectedFile);
    //console.log("files ="+files.item(0));
  }
  compareFn(val1:any, val2:any): boolean {
    return val1.nom == val2.nom ;
  }
  // handleFileInput(files: FileList)
  // {
  //   console.log(files);
  // }
  onEditClient(a:Athlete)
  {
    let id=this.activatedRoute.snapshot.params['id'];
    //console.log(id);
    a.photo=this.selectedFile;
    
    //this.atService.ediAthleteById(id, a).subscribe((data:any)=>{
     // this.atService.editAthleteByIdRest(id, a)
     this.atService.editAthleteWithCoach(this.id, id).
    subscribe((data:any)=>{
        //this.foods=data;
        //console.log("object added="+food);
        this.athlete=data;
        
        //this.file.webkitRelativePath=this.athlete.photo;
        this.router.navigateByUrl("/clients");
      },err=> 
      {console.log(err);}
      );
     
  }

}
