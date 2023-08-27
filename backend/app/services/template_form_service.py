

from app.models.template_form_model import TemplateForm


class TemplateFormService:

    @staticmethod
    def get_template(name):
        data = TemplateForm.get_template(name)
        if data:
            data['_id'] = str(data['_id'])
            return data
        else:
            return None
        