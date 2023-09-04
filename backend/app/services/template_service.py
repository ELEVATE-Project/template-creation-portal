from app.models import Template


class TemplateService:
    @staticmethod
    def create_template(template_name, template_code, data):
        template = Template(template_name, template_code, data )
        tmp_id = template.save()
        if tmp_id:
            tmp_id = str(tmp_id)
            return tmp_id
        else:
            return None

    @staticmethod
    def update_template(template_id, payload):
        return Template.update(template_id, payload)

    @staticmethod
    def save_as_draft(template_id):
        return Template.saveAsDraft(template_id)

    @staticmethod
    def find_by_id(template_id):
        return Template.find_by_id(template_id)

    @staticmethod
    def get_all_templates(user_id):
        templates = Template.find_many_by_user_id(user_id)
        for template in templates:
            template['_id'] = str(template['_id'])

        return templates
        
        