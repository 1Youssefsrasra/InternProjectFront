import { Component, OnInit,ElementRef,Renderer2,ChangeDetectorRef } from '@angular/core';
import { Patient } from './patient'
import { PredictionService } from 'src/app/services/prediction.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private predict :PredictionService,private elRef: ElementRef, private renderer: Renderer2,private cdRef: ChangeDetectorRef){}
  prediction_result : any ;
  pat: string = '/patient';
  title = 'MicroScan';
  patient = {
    name: 'John Smith',
    location: 'New York, USA',
    height: '186cm',
    age: 32,
    weight: '86kg'
  };
  analysis = {
    status: 'ready',
    contactMessage: 'Please contact your doctor to get a full diagnostic',
    resultsReceivedDate: 'Yesterday',
    analysisLaunchedDate: '22 Juli',
    laboratoryMeetingDate: '20 Juli'
  };
  ngOnInit(): void {
      this.prediction_result=this.predict.getData();
  }
  clicker(){
    console.log(this.prediction_result)
  }
  showModal: boolean = false;
  analysisResult: string = "Your analysis details go here";
  showViewResultButton = true;
  viewResult() {
    this.showModal = true;
  }
  seeMore() {
    this.showViewResultButton = true;
    this.showModal = false;
    console.log("See more details clicked");
  }
  closeModal() { this.showModal = false; 

    
    const inputElement = this.elRef.nativeElement.querySelector('#input_chat');

     // Manually trigger change detection
    this.cdRef.detectChanges();
    this.renderer.setProperty(inputElement, 'value', this.prediction_result);

    
    const buttonElement = this.elRef.nativeElement.querySelector('#button_chat');

    
    this.renderer.listen(buttonElement, 'click', () => {
      console.log('Button clicked!');
    });

    buttonElement.click();


  }
  
}
