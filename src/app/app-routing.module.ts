import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BenificeComponent } from './benifice/benifice.component';
import { ClientsComponent } from './clients/clients.component';
import { CoachComponent } from './coach/coach.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditCoachComponent } from './edit-coach/edit-coach.component';
import { EditNutritionComponent } from './edit-nutrition/edit-nutrition.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewAlimentComponent } from './new-aliment/new-aliment.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewCoachComponent } from './new-coach/new-coach.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PaimentsComponent } from './paiments/paiments.component';
import { AuthGaurdService } from './service/AuthGaurdService';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
   // path:"clients",component:ClientsComponent
     path:"clients",component:ClientsComponent,canActivate:[AuthGaurdService] 
  },
  {
    path:"new-client",component:NewClientComponent
  }
 ,
 {
  path:"new-coach",component:NewCoachComponent
},
 {
  path:"edit-aliment/:id",component:EditNutritionComponent
},
 {
  path:"coaches",component:CoachComponent
},
{
  path:"editClient/:id", component:EditClientComponent
}
 ,
{
  path:"paiments", component:PaimentsComponent
},
 {
  path:"editCoach/:id", component:EditCoachComponent
},
 {
  path:"aliments",component:NutritionComponent
},
{
  path:"new-aliment",component:NewAlimentComponent},
 {
    path:"new-payment",component:NewPaymentComponent
  },
  {
    path:"edit-payment/:id",component:EditPaymentComponent
  },
  {
    path:"benifice",component:BenificeComponent
  },
  {
     path:"login", component:LoginComponent
  },
  {
    path:"logout", component:LogoutComponent
 },
 {
   path: "users", component:UsersComponent
 },
 {
   path: "new-user", component:NewUserComponent
 },
 {
    path:"home", component:HomeComponent
 },
   {
   path:"", redirectTo:"/clients", pathMatch:'full'
 }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
