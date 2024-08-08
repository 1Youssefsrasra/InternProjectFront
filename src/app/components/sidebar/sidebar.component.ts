import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  @Input() isHighlighted = true;
  currentUrl: string = '';
  @Input() url: string = '';

  makeFalse() {
    this.isHighlighted = false;
  }
  makeTrue() {
    this.isHighlighted = true;
  }
  
  constructor(private sharedDataService: SharedDataService, private router: Router,private route: ActivatedRoute) { }

  sendData() {
    this.sharedDataService.setData(this.url);
    this.router.navigate(['profil']);
  }
  
}
