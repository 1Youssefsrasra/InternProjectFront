// profile.model.ts

export interface ResearchLabProfile {
    id: string;
    name: string;
    location: string;
    contactInfo: {
      email: string;
      phone: string;
    };
    specialties: string[];
  }
  
  export interface AnalysisLabProfile {
    id: string;
    name: string;
    accreditation: string;
    services: string[];
    contactInfo: {
      email: string;
      phone: string;
    };
  }
  
  export interface PatientProfile {
    id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    contactInfo: {
      email: string;
      phone: string;
      address: string;
    };
    medicalInfo: {
      bloodType: string;
      allergies: string;
      medications: string;
    };
    recentVisits: Array<{ date: string; description: string }>;
    upcomingAppointments: Array<{ description: string }>;
  }
  