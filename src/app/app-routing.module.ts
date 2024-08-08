import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

import { LabComponent } from './layouts/lab/lab.component';
import { PatientComponent } from './layouts/patient/patient.component';

import {ResearcherComponent}from './layouts/researcher/researcher.component'
import { LoginComponent } from './layouts/login/login.component';
import { PredictionComponent } from './layouts/prediction/prediction.component';
import { ProfileComponent } from './layouts/profile/profile.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},

  {path: 'patient', component:PatientComponent},


  {path:'researcher', component:ResearcherComponent},
  {path: 'lab', component:LabComponent},
  {path:'login',component:LoginComponent},
  {path:'prediction',component:PredictionComponent},
  {path:'profil',component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
