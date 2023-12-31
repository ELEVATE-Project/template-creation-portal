from datetime import datetime
from app import db
from app.helpers import TEMPLATE_STATUS
from bson import ObjectId

class Template:
    def __init__(self, template_name, template_code, data ):
        self.template_name = template_name
        self.template_code = template_code
        self.data = data
        self.created = datetime.now()

    def save(self):
        tmp = db.templates.insert_one({'template_name': self.template_name, 'created': self.created, 'template_code': self.template_code, 'data': self.data})
        print(tmp.inserted_id)
        return tmp.inserted_id
    
    @staticmethod
    def update(template_id, payload):
        payload.update = datetime.now()
        return db.templates.find_one_and_update({'_id': template_id}, {'$set': payload})

    @staticmethod
    def saveAsDraft(template_id):
        return db.templates.find_one_and_update({'_id': template_id}, {'$set': {'status': TEMPLATE_STATUS.DRAFT}})

    @staticmethod
    def find_by_id(templated_id):
        return db.templates.find_one({'_id': templated_id})
    
    @staticmethod
    def find_many_by_user_id(user_id):
        return list(db.templates.find({}))
    
    @staticmethod
    def update_filename(template_id, filename):
        return db.templates.find_one_and_update({'_id': ObjectId(template_id)}, {'$set': {'filename': filename}})
    
    @staticmethod
    def delete_template(template_id):
        return db.templates.delete_one({'_id': ObjectId(template_id)})
