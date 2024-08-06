import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { LabComponent } from './lab/lab.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    
    PatientComponent,
    ResearcherComponent,
    LabComponent,
    LoginComponent,
    ProfileComponent  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
    
    
  ]
})
export class LayoutsModule { }
