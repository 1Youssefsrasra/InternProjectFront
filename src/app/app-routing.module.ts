import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { DoctorComponent } from './layouts/doctor/doctor.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'doctor', component:DoctorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
