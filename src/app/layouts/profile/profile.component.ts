import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AnalysisLabProfile, PatientProfile, ResearchLabProfile } from './profil.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  receivedData: string='';
  Fal =false;
  constructor(private sharedDataService: SharedDataService, private profil:ProfileService ) { }
  researchLabs: ResearchLabProfile[] = [];
  analysisLabs: AnalysisLabProfile[] = [];
  patient: any ;
  

  ngOnInit() {
    this.receivedData = this.sharedDataService.getData();
    this.patient=this.profil.getData();
    this.researchLabs = [
      {
        id: 'RL001',
        name: 'Genomics Research Lab',
        location: '123 Research Blvd, Science City',
        contactInfo: {
          email: 'info@genomicslab.com',
          phone: '(555) 123-4567',
        },
        specialties: ['Genomics', 'Bioinformatics'],
      },
      // Add more research labs as needed
    ];
    
      // Add more patients as needed
    
  }

}
