import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { ResearcherComponent } from './researcher/researcher.component';
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
    ChatComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule
  ]
})
export class LayoutsModule { }
