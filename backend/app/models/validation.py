
from app import db

from datetime import datetime


class Validation:
    def __init__(self, template_code, createdBy, validations):
        self.validations = validations
        self.template_code = template_code
        self.createdBy = createdBy
        self.created = datetime.now()

    @staticmethod
    def get_validate_data(template_code):
        return db.validation.find_one({'template_code': template_code})