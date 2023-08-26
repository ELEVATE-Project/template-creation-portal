## Template Creation portal

# Backend

## Getting Started

Follow these steps to get the Flask application up and running using Conda.

## Prerequisites

- Anaconda or Miniconda: If you don't have Conda installed, download and install it from [here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html).

## Setting up the Environment

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

## Running the Flask Application


1. Run the Flask application:

   ```bash
   python app.py
   ```

3. Open your web browser and go to `http://127.0.0.1:5000` to see the running Flask app.

## Stopping the Application

To stop the Flask application, press `Ctrl+C` in the terminal where the app is running.

## Deactivating the Conda Environment

After you're done with the application, deactivate the Conda environment:

```bash
conda deactivate
```
# Frontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
