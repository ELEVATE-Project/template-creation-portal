
from app import db
from datetime import datetime

class Conditions:

    def __init__(self, name, payload):
        self.name = name
        self.payload = payload

    def create(self):
        return db.conditions.insert_one({"name": self.name, self.name: self.payload, 'created': datetime.now()})
    
    @staticmethod
    def update(payload, name):
        return db.conditions.find_and_update_one({'name': name}, {'$set': {name: payload, 'updated': datetime.now()}})
    
    @staticmethod
    def get_condition(name):
        return db.conditions.find_one({'name':name})
        
