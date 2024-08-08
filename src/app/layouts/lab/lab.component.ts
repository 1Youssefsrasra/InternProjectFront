import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  pat : any ="/lab";
  constructor( private profil:ProfileService , private data:SharedDataService ) { }
  sendData1() {
    const johnDoe = {
      name: 'John Doe',
      id: '123456',
      dateOfBirth: 'January 1, 1990',
      gender: 'Male',
      contactInfo: {
        email: 'john.doe@example.com',
        phone: '(123) 456-7890',
        address: '123 Main St, Anytown, USA'
      },
      medicalInfo: {
        bloodType: 'O+',
        allergies: 'None',
        medications: 'None'
      },
      recentVisits: [
        { date: 'June 20, 2024', description: 'Analysis completed' },
        { date: 'June 15, 2024', description: 'Sample given' },
        { date: 'June 10, 2024', description: 'Kit delivered' }
      ],
      upcomingAppointments: [
        { description: 'No appointments scheduled' }
      ],
      imageUrl: 'assets/Images/Patients/John.png'
    };
    
    this.profil.setData(johnDoe);
    this.data.setData('/lab');
  }
  sendData2() {
    const janeSmith = {
      name: 'Jane Smith',
      id: '789101',
      dateOfBirth: 'February 2, 1985',
      gender: 'Female',
      contactInfo: {
        email: 'jane.smith@example.com',
        phone: '(234) 567-8901',
        address: '456 Elm St, Another Town, USA'
      },
      medicalInfo: {
        bloodType: 'A-',
        allergies: 'Pollen',
        medications: 'Antihistamines'
      },
      recentVisits: [
        { date: 'July 10, 2024', description: 'Routine check-up' },
        { date: 'June 25, 2024', description: 'Follow-up visit' }
      ],
      upcomingAppointments: [
        { description: 'Annual physical on August 15, 2024' }
      ],
      imageUrl: 'assets/Images/Patients/Jane.png'
    };
    
    this.profil.setData(janeSmith);
    this.data.setData('/lab');
  }
  sendData3() {
    const aliceJohnson = {
      name: 'Alice Johnson',
      id: '112233',
      dateOfBirth: 'March 3, 1978',
      gender: 'Female',
      contactInfo: {
        email: 'alice.johnson@example.com',
        phone: '(345) 678-9012',
        address: '789 Oak St, Cityville, USA'
      },
      medicalInfo: {
        bloodType: 'B+',
        allergies: 'Peanuts',
        medications: 'EpiPen'
      },
      recentVisits: [
        { date: 'May 30, 2024', description: 'Allergy test' },
        { date: 'April 5, 2024', description: 'Annual review' }
      ],
      upcomingAppointments: [
        { description: 'Follow-up on June 20, 2024' }
      ],
      imageUrl: 'assets/Images/Patients/Alice.png'
    };
    
    this.profil.setData(aliceJohnson);
    this.data.setData('/lab');
  }
}
