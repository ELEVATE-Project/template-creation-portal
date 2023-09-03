import datetime
from app import db


class User:
    def __init__(self, email, password, username, roles=None):
        self.email = email
        self.password = password
        self.username = username
        self.roles = roles or ['admin']
        self.created = datetime.datetime.now()

    def save(self):
        return db.users.insert_one({'email': self.email, 'password': self.password, 'username': self.username, 'roles': self.roles, 'created': self.created})

    @staticmethod
    def find_by_email(email):
        print(db.users.find_one({'email': email}))
        return db.users.find_one({'email': email})

    @staticmethod
    def find_by_id(user_id):
        print(db.users)
        return db.users.find_one({'_id': user_id})
