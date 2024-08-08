import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from pymongo import MongoClient  
from datetime import datetime


import pandas as pd
from flask import Flask, request, jsonify



app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb://localhost:27017/')  # Connect to MongoDB (adjust URI as needed)
db = client['micro_scan']  # Database name
collection = db['predictions'] 
# Load the models and scalers
model = load_model('model.h5')
scaler = joblib.load('scaler.pkl')
label_encoder_diag = joblib.load('label_encoder_diag.pkl')
label_encoder_stage = joblib.load('label_encoder_stage.pkl')

# Load feature names from the dataset
file_path = 'last_data1.csv'
data = pd.read_csv(file_path)
features = data.columns.drop(['DIAGNOSIS', 'STAGE', 'TUMOR_PERCENT'])
feature_names = features.tolist()[2:]  # Assuming the first two are to be ignored

@app.route('/', methods=['POST'])
def predict():
    # Parse input data from JSON
    data = request.get_json()
    age = data.get('age')
    fibro_vessel = data.get('fibro_vessel')
    sex = data.get('sex')
    feature1 = data.get('feature1')
    feature2 = data.get('feature2')
    feature3 = data.get('feature3')
    feature4 = data.get('feature4')
    treatment = data.get('treatment')

    # Encode sex field
    sex_encoded = 1 if sex.lower() == 'male' else 0

    # Create input array
    input_values = [float(age), float(fibro_vessel), sex_encoded, float(feature1), float(feature2), float(feature3), float(feature4), float(treatment)]

    # Ensure the input data has exactly 8 features
    if len(input_values) != 8:
        return jsonify({'error': 'Error: Expected 8 input features.'}), 400

    # Map the provided 8 features to specific feature names (customize as needed)
    provided_features = {
        'AGE': input_values[0],
        'FIBROBLAST_AND_VESSEL_PERCENT': input_values[1],
        'SEX': input_values[2],
        'k__Bacteria; p__Firmicutes; c__Clostridia; o__Clostridiales; f__Peptostreptococcaceae;g__Peptostreptococcus; s__anaerobius': input_values[3],
        'k__Bacteria; p__Bacteroidetes; c__Bacteroidia; o__Bacteroidales; f__Prevotellaceae; g__Prevotella; s__stercorea': input_values[4],
        'k__Bacteria; p__Bacteroidetes; c__Bacteroidia; o__Bacteroidales; f__Bacteroidaceae; g__Bacteroides': input_values[5],
        'k__Bacteria; p__Bacteroidetes; c__Bacteroidia; o__Bacteroidales': input_values[6],
        'TREATMENT': input_values[7]
    }

    # Fill missing features with 0 and ensure the order of features matches the training data
    sample_input = [provided_features.get(feature, 0) for feature in feature_names]

    # Convert to numpy array and ensure correct shape
    sample_input = np.array(sample_input).reshape(1, -1)

    # Normalize the sample input using the scaler
    sample_input_scaled = scaler.transform(sample_input)

    # Make predictions using the trained model
    predictions = model.predict(sample_input_scaled)

    # Assuming the model outputs predictions for diagnosis and stage as separate outputs
    if isinstance(predictions, list) and len(predictions) == 2:
        predicted_diag = np.argmax(predictions[0], axis=-1)
        predicted_stage = np.argmax(predictions[1], axis=-1)
    else:
        predicted_diag = np.argmax(predictions, axis=-1)
        predicted_stage = np.argmax(predictions, axis=-1)

    # Decode the predictions
    predicted_diag_label = label_encoder_diag.inverse_transform([predicted_diag])[0]
    predicted_stage_label = label_encoder_stage.inverse_transform([predicted_stage])[0] if predicted_stage != "N/A" else "N/A"

    # Only include the stage prediction if the diagnosis is not "Healthy"
    if predicted_diag_label.lower() == 'healthy':
        prediction_text = f'Predicted Diagnosis: {predicted_diag_label}'
    else:
        prediction_text = f'Predicted Diagnosis: {predicted_diag_label}, Predicted Stage: {predicted_stage_label}'

    prediction_record = {
        'age': age,
        'fibro_vessel': fibro_vessel,
        'sex': sex,
        'feature1': feature1,
        'feature2': feature2,
        'feature3': feature3,
        'feature4': feature4,
        'treatment': treatment,
        'predicted_diagnosis': predicted_diag_label,
        'predicted_stage': predicted_stage_label,
        'prediction_text': prediction_text,
        'prediction_date': datetime.now().isoformat()  # Ajoute la date et l'heure actuelle en format ISO

    }
    collection.insert_one(prediction_record)  # Insert the record into MongoDB

    return jsonify({'prediction': prediction_text})

""" the part related to the id microbiom  """

# Load the CSV file into a DataFrame
microbiome_df = pd.read_csv('microbiome_ids.csv')

# Ensure IDs are strings
microbiome_df['ID'] = microbiome_df['ID'].astype(str)

# Create a dictionary for quick lookup
microbiome_dict = dict(zip(microbiome_df['ID'], microbiome_df['MicrobiomeName']))

@app.route('/get_microbiome', methods=['POST'])
def get_microbiome():
    data = request.get_json()
    microbiome_id = str(data.get('ID'))  # Ensure ID is treated as a string
    print(f"Received microbiome ID: {microbiome_id}")  # Log the ID for debugging
    microbiome_name = microbiome_dict.get(microbiome_id, "ID not found")
    return jsonify({'microbiome_name': microbiome_name})


@app.route('/predictions', methods=['GET'])
def get_predictions():
    # Récupérer toutes les prédictions de MongoDB
    predictions = list(collection.find({}))
    
    # Convertir les objets BSON en JSON
    for prediction in predictions:
        prediction['_id'] = str(prediction['_id'])
    
    return jsonify(predictions)
""" end  """

if __name__ == '__main__':
    app.run(port=3000, debug=True)
