from app import app
from app.controller.template_controller import TemplateController
from app.middleware.commonAuth import token_required


@app.route('/api/v1/<user_id>/templates/drafts', methods=['GET'])
@token_required
def getDraftTemplates():
    return TemplateController.getDraftTemplate()


@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['GET'])
@token_required
def getTemplate():
    return TemplateController.getTemplate()


@app.route('/api/v1/<user_id>/templates/', methods=['GET'])
@token_required
def getAllTemplates():
    return TemplateController.getAllTemplates()


@app.route('/api/v1/<user_id>/templates/', methods=['POST'])
@token_required
def createTemplate():
    return TemplateController.createTemplate()


@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['PUT'])
@token_required
def updateTemplate():
    return TemplateController.updateTemplate()


@app.route('/api/v1/<user_id>/templates/<template_id>', methods=['DELETE'])
@token_required
def deleteTemplate():
    return TemplateController.deleteTemplate()


@app.route('/api/v1/<user_id>/templates/<template_id>/saveAsDraft', methods=['PUT'])
@token_required
def saveAsDraft():
    return TemplateController.saveAsDraft()


@app.route('/api/v1/<user_id>/templates/<template_id>/publish', methods=['PUT'])
@token_required
def publishTemplate():
    return TemplateController.publishTemplate()


@app.route('/api/v1/<user_id>/templates/', methods=['GET'])
@token_required
def getTemplateInstruction():
    return TemplateController.getTemplateInstruction()