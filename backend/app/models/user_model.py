from app import db


class User:
    def __init__(self, username, password, roles=None):
        self.username = username
        self.password = password
        self.roles = roles or ['admin']

    def save(self):
        return db.users.insert_one({'username': self.username, 'password': self.password, 'roles': self.roles})

    @staticmethod
    def find_by_username(username):
        return db.users.find_one({'username': username})

    @staticmethod
    def find_by_id(user_id):
        return db.users.find_one({'_id': user_id})
