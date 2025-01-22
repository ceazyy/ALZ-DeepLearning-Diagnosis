from flask import Flask, request, render_template, jsonify
import numpy as np
from PIL import Image
from keras.models import load_model
from keras.preprocessing import image

app = Flask(__name__)

# Load the model
model = load_model('Model/final.h5')

# Define class labels
class_labels = ["MildDemented", "ModerateDemented", "NonDemented", "VeryMildDemented"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/upload', methods=['POST'])
def upload():
    # Check if the file is present in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    # Check if the file name is empty
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Open and preprocess the image
    img = Image.open(file)
    img = img.resize((224, 224))  
    img = img.convert('RGB')

    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    image1 = np.vstack([img])

    # Make predictions using the model
    predictions = model.predict(image1)

    # Convert predictions to a Python list
    alzheimers_probability = predictions[0].tolist()

    # Prepare the result dictionary
    result = {'alzheimers_prediction': {}}

    # Zip class labels with predicted probabilities
    for label, prob in zip(class_labels, alzheimers_probability):
        result['alzheimers_prediction'][label] = prob

    # Return the result as JSON
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
