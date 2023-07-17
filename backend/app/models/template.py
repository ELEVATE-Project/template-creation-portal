from datetime import datetime

from bson import ObjectId

from app import db
from app.helpers import TEMPLATE_STATUS


class Template:
    def __init__(self, template_name, user_id, ):
        self.template_name = template_name
        self.user_id = user_id
        self.created = datetime.now()

    def save(self):
        return db.templates.insert_one({'template_name': self.template_name, 'user_id': ObjectId(self.user_id), 'created': self.created})

    @staticmethod
    def update(template_id, payload):
        payload.update = datetime.now()
        return db.templates.find_and_update_one({'_id': template_id}, {'$set': payload})

    @staticmethod
    def saveAsDraft(template_id):
        return db.templates.find_and_update_one({'_id': template_id}, {'$set': {'status': TEMPLATE_STATUS.DRAFT}})

    @staticmethod
    def find_by_id(templated_id):
        return db.templates.find_one({'_id': templated_id})
