
import datetime
from app import db

class TemplateStructureModel:
    def __init__(self, template_type, no_of_sheets, data_sources= [], instruction_metadata={}):
        self.template_type = template_type
        self.no_of_sheets = no_of_sheets
        self.data_sources = data_sources
        self.instruction_metadata = instruction_metadata
        self.created = datetime.now()


    def save_template(self):
        return db.templateStructure.insert_one({'type': self.template_type, 'no_of_sheets': self.no_of_sheets, 'data_sources': self.data_sources, 'instruction_metadata' :self.instruction_metadata, 'created': self.created})
    
    @staticmethod
    def get_template(type):
        return db.templateStructure.find_one({'type':type})
    
    


        

