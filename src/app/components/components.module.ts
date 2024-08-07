import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SidebarComponent

  ]
})
export class ComponentsModule { }
