import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { DoctorComponent } from './layouts/doctor/doctor.component';
import {ResearcherComponent}from './layouts/researcher/researcher.component'

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'researcher', component:ResearcherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
