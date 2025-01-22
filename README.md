# ALHZY: Alzheimer's Disease Detection Platform

ALHZY is an advanced online platform designed to predict Alzheimer's Disease with high accuracy using deep learning. The platform leverages a pre-trained EfficientNetB3 model to classify brain MRI scans into four categories: **Mild Demented**, **Moderate Demented**, **Non-Demented**, and **Very Mild Demented**. With an accuracy of 99.7%, this tool provides a reliable and efficient solution for early detection and diagnosis.

## Features
- **Efficient Model**: Uses EfficientNetB3 for reduced computational complexity and improved accuracy.
- **User-Friendly Interface**: Easy-to-navigate web interface built with Flask.
- **Automated Predictions**: Upload brain MRI images to get instant Alzheimer's predictions.
- **Scalable Solution**: Capable of handling diverse datasets with robust performance.

## Technologies Used
- **Backend**: Flask
- **Frontend**: HTML, CSS, and Jinja2 templates
- **Deep Learning Framework**: TensorFlow/Keras
- **Model Architecture**: EfficientNetB3
- **Image Processing**: PIL (Python Imaging Library)

## Installation

Follow these steps to set up and run ALHZY locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/alhzy.git
   cd alhzy
