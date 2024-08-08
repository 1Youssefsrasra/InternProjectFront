import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PredictionResponse {
  prediction: string;
}

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://127.0.0.1:3000'; // URL to your Flask API

  constructor(private http: HttpClient) { }

  // Method to send data to the backend and get the prediction
  predict(data: any): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(this.apiUrl, data);
  }
}
