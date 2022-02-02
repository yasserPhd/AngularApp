import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Injectable()
export class variableGlobale {
  public static logged: boolean = false;
  constructor(private loggedComp:LoginComponent)
  {
    
  }
  ngOnInit(): void {
      
    // variableGlobale.logged=this.loggedComp.logged;
    // console.log( variableGlobale.logged);
  }
}