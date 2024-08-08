import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/services/prediction.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
constructor( private predict : PredictionService){}
  ngOnInit(): void {
    console.log(this.predict.getData())
  }
}
