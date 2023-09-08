
import datetime
from app import db
import json

class TemplateForm:
    def __init__(self, template_type, no_of_sheets, data_sources= [], instruction_metadata={}):
        self.template_type = template_type
        self.no_of_sheets = no_of_sheets
        self.data_sources = data_sources
        self.instruction_metadata = instruction_metadata
        self.created = datetime.now()


    def save_template(self):
        return db.templateForm.insert_one({'type': self.template_type, 'no_of_sheets': self.no_of_sheets, 'data_sources': self.data_sources, 'instruction_metadata' :self.instruction_metadata, 'created': self.created})
    
    @staticmethod
    def get_template(name):
        templateForm = db.templateForm.find_one({'name':name})
        return templateForm
    
    @staticmethod 
    def get_template_by_code(template_code):
        print(template_code)
        TemplateForm = db.templateForm.find_one({'template_code': int(template_code)})
        print(TemplateForm)
        return TemplateForm

    
    


        

