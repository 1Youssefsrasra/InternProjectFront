import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { LabComponent } from './lab/lab.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    DoctorComponent,
    PatientComponent,
    ResearcherComponent,
    LabComponent,
    LoginComponent  ],
  imports: [
    CommonModule,
    ComponentsModule
    
  ]
})
export class LayoutsModule { }
