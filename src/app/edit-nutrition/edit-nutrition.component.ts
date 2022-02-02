import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food/Food';
import { NutrServService } from '../service/nutr-serv.service';

@Component({
  selector: 'app-edit-nutrition',
  templateUrl: './edit-nutrition.component.html',
  styleUrls: ['./edit-nutrition.component.css']
})
export class EditNutritionComponent implements OnInit {
  public food:Food=new Food();
  constructor(private nutService:NutrServService,private route:Router, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.actRoute);
    let id=this.actRoute.snapshot.params['id'];
   
    this.nutService.getItemByid(id).subscribe((data:any)=>{
      console.log("item"+data.FoodItem);
       this.food.id=data.id;
       this.food.cals_per100grams=data.Cals_per100grams;
       this.food.foodCategory=data.FoodCategory;
       this.food.foodItem=data.FoodItem;
       this.food.kj_per100grams=data.KJ_per100grams;
       this.food.per100grams=data.per100grams;
       //console.log(this);
    },err=>{
      console.log(err);

    });
  }
     onEditFood(f:Food)
     {
      let id=this.actRoute.snapshot.params['id'];
      //console.log(id);
        this.nutService.editItem(id, f).subscribe((data:any)=>{
          //this.foods=data;
          //console.log("object added="+food);
         
        this.food=data;
        this.route.navigateByUrl("/aliments");
        },err=> 
        {console.log(err);}
        );
       
     }
}
