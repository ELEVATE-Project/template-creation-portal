

from app.helpers.success_response import success_response
from app.helpers.error_response import error_response
from app.services.template_form_service import TemplateFormService
from flask import jsonify, request


class TemplateFormController:

    @staticmethod
    def getTemplateForm():
        print("here")
        try:
            type = request.args.get('type')
            print(type)
            templateForm = TemplateFormService.get_template(type)
            print(templateForm)
            return success_response(templateForm)
            
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)
