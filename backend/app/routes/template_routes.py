from app import app
from app.controller.template_controller import TemplateController
from app.controller.template_form_controller import TemplateFormController
from app.middleware.commonAuth import token_required


@app.route('/api/v1/templates/drafts', methods=['GET'])
@token_required
def getDraftTemplates():
    return TemplateController.getDraftTemplate()



@app.route('/api/v1/template-form', methods=['GET'])
# @token_required
def getTemplate():
    return TemplateFormController.getTemplateForm()


@app.route('/api/v1/templates/all', methods=['GET'])
# @token_required
def getAllTemplates():
    return TemplateController.getAllTemplates()


@app.route('/api/v1/template', methods=['POST'])
def createTemplate():
    return TemplateController.createTemplate()


@app.route('/api/v1/template/filename', methods=['PUT'])
def updateTemplateFileName():
    return TemplateController.updateTemplateFileName()


@app.route('/api/v1/template', methods=['DELETE'])
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


@app.route('/api/v1/<user_id>/templates-instruction', methods=['GET'])
@token_required
def getTemplateInstruction():
    return TemplateController.getTemplateInstruction()