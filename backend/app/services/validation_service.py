
from app.models import Validation

class ValidationService:

    @staticmethod
    def validate_data(template_code):
        validationObj = ValidationService.get_validation_data(template_code)
        return validationObj

    @staticmethod
    def get_validation_data(template_code):
        validationObj = Validation.get_validate_data(template_code)
        print(validationObj)
        if validationObj:
            validationObj['_id'] = str(validationObj['_id'])
            return validationObj
        else:
            return None