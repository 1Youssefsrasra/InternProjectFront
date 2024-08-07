import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { LabComponent } from './lab/lab.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PredictionComponent } from './prediction/prediction.component';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    PatientComponent,
    ResearcherComponent,
    LabComponent,
    LoginComponent,
    ProfileComponent,
    PredictionComponent  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterLink,AppRoutingModule,FormsModule



  ]
})
export class LayoutsModule { }
