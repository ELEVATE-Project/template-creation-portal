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
    def updateTemplateFileName():
        try:
            template_id = request.args.get('template_id')
            data = request.get_json()
            template_name = data['filename']
            result = TemplateService.update_template_filename(template_id, template_name)
            if result:
                return  success_response(True, message='Template Filename updated successfully')
            else:
                return error_response('Template not found', 404)
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)

    @staticmethod
    def deleteTemplate():
        try:
            template_id = request.args.get('template_id')
            result = TemplateService.delete_template(template_id)
            if result.deleted_count == 1:
                return  success_response(True, message='Template deleted successfully')
            else:
                return error_response('Template not found', 404)
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)
        

    @staticmethod
    def saveAsDraft():
        pass

    @staticmethod
    def publishTemplate():
        pass

    @staticmethod
    def getTemplateInstruction():
        pass