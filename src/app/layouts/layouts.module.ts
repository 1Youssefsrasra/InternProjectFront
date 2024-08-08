import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PredictionComponent } from './prediction/prediction.component';
import { NgForm } from '@angular/forms';
import { LabComponent } from './lab/lab.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from '../components/chat/chat.component';


@NgModule({
  declarations: [
    
    PatientComponent,
    ResearcherComponent,
    LabComponent,
    LoginComponent,
    ChatComponent,
    ProfileComponent,
    PredictionComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterLink,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    FormsModule
  ]
})
export class LayoutsModule { }
