import { EmailValidator } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Coach } from "../Coach.model/Coach";
export class Athlete {
    nom: string="";
    date_naissance:Date=new Date();
    
    email:string="";
    photo:string="";
    coach:Coach= new Coach();

   

 } 