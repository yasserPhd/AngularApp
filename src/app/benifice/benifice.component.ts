import { Component, OnInit } from '@angular/core';
import { BenificeService } from '../service/benifice.service';

@Component({
  selector: 'app-benifice',
  templateUrl: './benifice.component.html',
  styleUrls: ['./benifice.component.css']
})
export class BenificeComponent implements OnInit {
public benifice:number=0;
  constructor(private benificeSer:BenificeService) { }

  ngOnInit(): void {
     this.benificeSer.getBenifice().subscribe((data:any)=>{
         this.benifice=data;
     },err=>{
         console.log(err);
     })
  }


}
