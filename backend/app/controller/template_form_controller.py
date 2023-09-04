

from app.helpers.success_response import success_response
from app.helpers.error_response import error_response
from app.services.template_form_service import TemplateFormService
from flask import jsonify, request


class TemplateFormController:

    @staticmethod
    def getTemplateForm():
        try:
            type = request.args.get('type')
            template_code = request.args.get('template_code')
            templateForm = {}
            if type:
                templateForm = TemplateFormService.get_template(type)
            elif template_code:
                templateForm = TemplateFormService.get_template_by_code(template_code)
            else:
                return error_response('Argument Error', 500)
            
            return success_response(templateForm)
            
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)
