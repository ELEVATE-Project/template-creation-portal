
from flask import request
from app.services.condition_service import ConditionService
from app.helpers.error_response import error_response
from app.helpers.success_response import success_response

class ConditionController:

    @staticmethod
    def createNewCondition():
        pass

    @staticmethod
    def getConditionData():
        try:
            name = request.args.get('name')
            return success_response(ConditionService.get_condition_data(name))
        except Exception as e:
            error_message = str(e)
            print(error_message)
            return error_response(error_message, 500)

    