import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoachComponent } from './coach/coach.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { NewAlimentComponent } from './new-aliment/new-aliment.component';
import { EditNutritionComponent } from './edit-nutrition/edit-nutrition.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { NewCoachComponent } from './new-coach/new-coach.component';
import { EditCoachComponent } from './edit-coach/edit-coach.component';
import { PaimentsComponent } from './paiments/paiments.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DatePipe } from '@angular/common';
import { BenificeComponent } from './benifice/benifice.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { HomeComponent } from './home/home.component';

//const logged=false;
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    CoachComponent,
    NutritionComponent,
    NewAlimentComponent,
    EditNutritionComponent,
    EditClientComponent,
    NewCoachComponent,
    EditCoachComponent,
    PaimentsComponent,
    NewPaymentComponent,
    EditPaymentComponent,
    BenificeComponent,
    LoginComponent,
    LogoutComponent,
    UsersComponent,
    NewUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
