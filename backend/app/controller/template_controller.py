from app.helpers.error_response import error_response
from app.helpers.success_response import success_response
from app.services.template_service import TemplateService

from flask import jsonify, request

class TemplateController:

    @staticmethod
    def getTemplateList():
        pass

    @staticmethod
    def getDraftTemplate():
        pass

    @staticmethod
    def getTemplate():
        pass

    @staticmethod
    def getAllTemplates():
        try:
            templateData = TemplateService.get_all_templates('future_work')
            return success_response(templateData)
            
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)

    @staticmethod
    def createTemplate():
        try:
            data = request.get_json()
            template_name = data['template_name']
            template_code = data['template_code']
            columns = data['data']
            template_id = TemplateService.create_template(template_name, template_code, columns)
            return success_response({'template_id': template_id})
            
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)


    @staticmethod
    def updateTemplate():
        pass

    @staticmethod
    def deleteTemplate():
        pass

    @staticmethod
    def saveAsDraft():
        pass

    @staticmethod
    def publishTemplate():
        pass

    @staticmethod
    def getTemplateInstruction():
        pass