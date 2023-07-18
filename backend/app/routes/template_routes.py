from app import app
from app.controller.template_controller import TemplateController
from app.middleware.commonAuth import token_required


@token_required
@app.route('/api/v1/<user_id>/templates/', methods=['GET'])
def getDraftTemplates():
    return TemplateController.getDraftTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['GET'])
def getTemplate():
    return TemplateController.getTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/', methods=['GET'])
def getAllTemplates():
    return TemplateController.getAllTemplates()


@token_required
@app.route('/api/v1/<user_id>/templates/', methods=['POST'])
def createTemplate():
    return TemplateController.createTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['PUT'])
def updateTemplate():
    return TemplateController.updateTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['DELETE'])
def deleteTemplate():
    return TemplateController.deleteTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/<template_id>/saveAsDraft', methods=['PUT'])
def saveAsDraft():
    return TemplateController.saveAsDraft()


@token_required
@app.route('/api/v1/<user_id>/templates/<template_id>/publish', methods=['PUT'])
def publishTemplate():
    return TemplateController.publishTemplate()


@token_required
@app.route('/api/v1/<user_id>/templates/', methods=['GET'])
def getTemplateInstruction():
    return TemplateController.getTemplateInstruction()