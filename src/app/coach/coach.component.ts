import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from '../Coach.model/Coach';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  coaches:any;
  public size:number=6;
  public currentpage:number=0;
  public totalpages:number=0;
  public pages:Array<number>=[];
  public path="/assets/images/";
  constructor(private coachServ:CoachServService, private router:Router) { }

  ngOnInit(): void {
    this.OnGetCoach();
  }

  OnGetCoach()
  {
    //  this.httpClient.get("https://retoolapi.dev/AgFTsW/data").
    // this.httpClient.get("http://localhost:8080/athletes").
    
    this.coachServ.getCoaches(this.currentpage,this.size)
    .subscribe((data: any)=>{
       this.coaches=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
         this.totalpages=data["page"].totalPages;
         this.pages=new Array<number>(this.totalpages);
         console.log(this.totalpages);
     },err=> 
     {console.log(err);}
     );
  }
  public searchCoach(value: any)
  {
    this.coachServ.getCoachByKeword(this.currentpage,this.size,value.keyword)
    .subscribe((data: any)=>{
       this.coaches=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
         this.totalpages=data["page"].totalPages;
         this.pages=new Array<number>(this.totalpages);
         console.log(this.totalpages);
     },err=> 
     {console.log(err);}
     );
  }
  public OnPageCoach(i:number)
  {
   this.currentpage=i;
   this.OnGetCoach();

  }
  public onDeleteCoach(c:any)
  {
    let conf=confirm("Are you sure to delete this athlete?")
    if (conf)
    {
     let url=c._links.self.href;
     //console.log("this is url "+c._links.self.href);
    this.coachServ.deleteCoach(url).
    subscribe(data=>{
      this.OnGetCoach();
      console.log("coach deleted");
    },err=> 
    {console.log("error found"+err);}
    )
  }
  }
  onEditCoach(url:string)
  {
    let arr:string[]=url.split("/")
    let id=arr[arr.length-1];
    //console.log("url="+url);
     this.router.navigateByUrl("/editCoach/"+id);
  }

}
