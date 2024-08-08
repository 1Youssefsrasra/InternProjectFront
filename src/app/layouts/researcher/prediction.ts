export interface Prediction {
    _id: string;
    age: string;
    fibro_vessel: string;
    sex: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    treatment: string;
    predicted_diagnosis: string;
    predicted_stage: string;
    prediction_text: string;
    prediction_date?: string; // Optional if it might not always be present
  }
  