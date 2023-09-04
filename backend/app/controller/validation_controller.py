
from flask import request
from app.services.validation_service import ValidationService
from app.helpers.error_response import error_response
from app.helpers.success_response import success_response

class ValidationController:

    @staticmethod
    def addValidation():
        pass

    @staticmethod
    def getValidationData():
        try:
            template_code = request.args.get('template_code')
            return success_response(ValidationService.get_validation_data(template_code))
        except Exception as e:
            error_message = str(e)
            print(error_message)
            return error_response(error_message, 500)

    