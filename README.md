# Alzheimer's Disease Diagnosis Using Deep Learning

## Overview
This repository contains the implementation, dataset reference, and findings from our study:  
**"A Comparative Analysis of Deep Learning Models for Alzheimer's Disease Diagnosis."**  
The research evaluates various deep learning architectures for classifying MRI images into different stages of Alzheimer's disease.
(The model is not uploaded because the file was large)

## Dataset
The dataset utilized in this research is the **Alzheimer's MRI Preprocessed Dataset**, accessible on [Kaggle](https://www.kaggle.com/datasets/sachinkumar413/alzheimer-mri-dataset).  
It includes 6400 MRI scans classified into the following categories:
- **Non-Demented**
- **Very Mild Demented**
- **Mild Demented**
- **Moderate Demented**

## Evaluated Models
The following deep learning models were compared in terms of classification performance:
- **VGG-16**
- **Inception v3**
- **EfficientNet-B3**
- **Xception**

| Model           | Accuracy | Precision | Recall | AUC  |
|---------------|----------|-----------|--------|------|
| VGG-16        | 83.8%    | 0.681     | 0.664  | 0.898 |
| Inception v3  | 89.6%    | 0.890     | 0.890  | 0.985 |
| Xception      | 92.5%    | 0.93      | 0.93   | 0.93  |
| EfficientNet-B3 | 99.7%  | 0.99      | 0.99   | 0.99  |

## Repository Structure
```
ALZ-DeepLearning-Diagnosis/
│── data/                     # Dataset reference or sample data
│── models/                   # Pre-trained models and architectures
│── notebooks/                # Jupyter notebooks for experimentation
│── src/                      # Training and evaluation scripts
│── results/                  # Metrics, evaluation reports, and graphs
│── figures/                  # Visualizations and diagrams
│── paper/                    # Research paper and supporting materials
│── requirements.txt          # List of dependencies
│── README.md                 # Project documentation
│── LICENSE                   # License information
│── .gitignore                # Files to exclude from version control
```

## Installation & Usage
### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/ALZ-DeepLearning-Diagnosis.git
cd ALZ-DeepLearning-Diagnosis
```
### **2. Install Required Dependencies**
```bash
pip install -r requirements.txt
```
### **3. Train the Model**
```bash
python src/train.py --model EfficientNet-B3 --epochs 40
```
### **4. Evaluate the Model**
```bash
python src/evaluate.py --model EfficientNet-B3
```

## Findings
- **EfficientNet-B3** achieved the highest classification accuracy of **99.7%**.
- **Xception** provided competitive accuracy (**92.5%**) with efficient computational performance.
- **Inception v3 and VGG-16** demonstrated moderate accuracy, requiring further optimization.

## Future Enhancements
- Integrating attention mechanisms to improve model interpretability.
- Exploring multimodal data fusion for enhanced diagnostic accuracy.
- Developing lightweight models suitable for clinical deployment.

## Citation
If you reference this research, please cite:
```
@article{your-paper,
  author = {Nipun Chandra, Ayush Kumar, Swasti Gautam, Dr. Ankush Jain, Rohit Kumar},
  title = {A Comparative Analysis of Deep Learning Models for Alzheimer's Disease Diagnosis},
  journal = {Your Conference/Journal Name},
  year = {2024}
}
```

## Contributors
- **Nipun Chandra**
- **Ayush Kumar**
- **Swasti Gautam**
- **Dr. Ankush Jain**
- **Rohit Kumar**

## License
This project is licensed under the MIT License.
