import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredictionService } from 'src/app/services/prediction.service';

interface Feature {
  id: string;
  name: string | null;
  composition: string | null;  // Add this line
}

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  prediction: string | null = null;
  features: Feature[] = [
    { id: '', name: null, composition: null },
    { id: '', name: null, composition: null },
    { id: '', name: null, composition: null },
    { id: '', name: null, composition: null }
  ];

  constructor(private http: HttpClient , private predict : PredictionService) {}

  onSubmit(form: any) {
    const formData = {
      age: form.value.age,
      fibro_vessel: form.value.fibro_vessel,
      sex: form.value.sex,
      feature1: this.features[0].id,
      feature2: this.features[1].id,
      feature3: this.features[2].id,
      feature4: this.features[3].id,
      treatment: form.value.treatment
    };

    this.http.post<any>('http://127.0.0.1:3000', formData).subscribe(
      response => {
        this.prediction = response.prediction;
        this.predict.setData(response.prediction);
      },
      error => {
        console.error('Error:', error);
        this.prediction = 'An error occurred while making the prediction.';
      }
    );
  }

  fetchMicrobiomeName(index: number) {
    const id = this.features[index].id;
    if (!id) return;

    this.http.post<{ microbiome_name: string }>('http://127.0.0.1:3000/get_microbiome', { ID: id }).subscribe(
      response => {
        console.log(`Microbiome ID: ${id}, Name: ${response.microbiome_name}`);
        this.features[index].name = response.microbiome_name;
      },
      error => {
        console.error('Error fetching microbiome name:', error);
      }
    );
  }

}
