import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HomepageComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule


  ]
})
export class HomepageModule { }