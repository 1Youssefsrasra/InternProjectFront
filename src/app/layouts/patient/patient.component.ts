import { Component, OnInit } from '@angular/core';
import { Patient } from './patient'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
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

}
