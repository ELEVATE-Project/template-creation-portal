from app import app
from app.controller.condtition_controller import ConditionController


@app.route('/api/v1/conditions', methods=['GET'])
def getConditionData():
    return ConditionController.getConditionData()


