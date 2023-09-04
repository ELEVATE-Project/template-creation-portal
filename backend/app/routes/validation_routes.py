from app import app
from app.controller.validation_controller import ValidationController


@app.route('/api/v1/validation', methods=['GET'])
def getValidationData():
    return ValidationController.getValidationData()


