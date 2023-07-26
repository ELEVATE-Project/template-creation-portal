from datetime import datetime

from app import db


class User:
    def __init__(self, email_address, password, username, roles=None):
        self.email_address = email_address
        self.password = password
        self.username = username
        self.roles = roles or ['admin']

    def save(self):
        return db.users.insert_one({'email_address': self.email_address, 'password': self.password, 'username': self.username, 'roles': self.roles, 'created': datetime.now()})

    @staticmethod
    def find_by_email_address(email_address):
        return db.users.find_one({'email_address': email_address})

    @staticmethod
    def find_by_id(user_id):
        return db.users.find_one({'_id': user_id})

    @staticmethod
    def update_user(user_id, email_address, password, username):
        return db.users.update_one({'_id': user_id}, {'$set': {'email_address': email_address, 'password': password, 'username': username}})
