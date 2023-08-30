from app.models import Template


class TemplateService:
    @staticmethod
    def create_template(template_name, user_id):
        template = Template(template_name, user_id)
        return template.save()

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
    def get_all_templates():
        return Template.get_all_templates()