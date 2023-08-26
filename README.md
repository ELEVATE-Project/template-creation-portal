## Template Creation portal

#### Backend
# Template Creation Portal Backend

This repository contains the backend code built in Flask that supports the Template Creation Portal System.


## Getting Started

Follow these steps to get the Flask application up and running using Conda.

### Prerequisites

- Anaconda or Miniconda: If you don't have Conda installed, download and install it from [here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html).

### Setting up the Environment

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/ELEVATE-Project/template-creation-portal.git
    
    cd template-creation-portal
    ```

2. Create a Conda environment using the provided `environment.yml` file:

    ```bash
    conda env create -f environment.yml
    ```

3. Activate the Conda environment:

   On Windows:

   ```bash
   conda activate templateCreation
   ```

   On macOS and Linux:

   ```bash
   source activate templateCreation
   ```

### Running the Flask Application


1. Run the Flask application:

   ```bash
   python app.py
   ```

3. Open your web browser and go to `http://127.0.0.1:5000` to see the running Flask app.

### Stopping the Application

To stop the Flask application, press `Ctrl+C` in the terminal where the app is running.

### Deactivating the Conda Environment

After you're done with the application, deactivate the Conda environment:

```bash
conda deactivate
```
#### Frontend
