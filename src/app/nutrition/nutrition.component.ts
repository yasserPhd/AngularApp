import { Component, OnInit } from '@angular/core';
import { NutrServService } from '../service/nutr-serv.service';
import { Food } from '../food/Food';
import { Router } from '@angular/router';
import { EditNutritionComponent } from '../edit-nutrition/edit-nutrition.component';
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
 nutriments:Food[]=[];
 currentNutr:Food[]=[];
 //public currFood:Food=new Food();
  public size:number=6;
  public currentpage:number=0;
  public totalpages:number=0;
  public pages:Array<number>=[];
  constructor(private nutrServ:NutrServService, private router:Router) { }

  ngOnInit(): void {
    this.OnGetNutrients();
  }
  OnGetNutrients()
  {
    //  this.httpClient.get("https://retoolapi.dev/AgFTsW/data").
    // this.httpClient.get("http://localhost:8080/athletes").
    
    this.nutrServ.getNutrition(this.currentpage,this.size)
    .subscribe((data: any)=>{
       this.nutriments=data;
       this.totalpages=Math.ceil(data.length/5);
      // console.log(this.totalpages);
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
        // this.totalpages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalpages);
        this.currentNutr=this.nutriments.slice(0,5);
        this.currentpage=0;
        // console.log(this.totalpages);
     },err=> 
     {console.log(err);}
     );
     
  }
  public OnPageNutrient(i:number)
  {
  
   this.currentpage=i;
   
   this.currentNutr=this.nutrServ.getNutrByPage(i,this.nutriments);
  
   }


  OnGetByName(value:any)
  {
    this.nutrServ.getNutByLikeName(value.keyword).subscribe((data:any)=>{
     // console.log("url="+this.nutrServ.urls+value.keyword);
      this.nutriments=data;
      this.currentNutr=data.slice(0,5);
      this.totalpages= Math.ceil(data.length/5);
      this.pages=new Array<number>(this.totalpages);
      this.OnPageNutrient(0);
      //this.totalpages=Math.ceil(data.length/5);
     
      
      //this.currentpage=0;
     //data = JSON.parse(data.toString());
       //data=data as any[];
       //this.totalpages= data.page.totalPages;
       // this.totalpages=data["page"].totalPages;
      //  this.pages=new Array<number>(this.totalpages);
    },err=> 
    {console.log(err);}
    );
  }
  onDeleteItem(id:number)
  {
    let conf=confirm("Are you sure to delete this nutrients?")
    if (conf)
    {
    this.nutrServ.deleteItem(id).subscribe((data: any)=>{
      //console.log("data here="+data);
      this.OnGetNutrients();
     //data = JSON.parse(data.toString());
       //data=data as any[];
       //this.totalpages= data.page.totalPages;
       // this.totalpages=data["page"].totalPages;
      //  this.pages=new Array<number>(this.totalpages);
    },err=> 
    {console.log(err);}
    );
  }
}
onEditItem(id:number)
{
  //this.editFodd.food=p;
this.router.navigateByUrl("/edit-aliment/"+id);
}
}
