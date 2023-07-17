from app import db


class User:
    def __init__(self, email_address, password, username, roles=None):
        self.email_address = email_address
        self.password = password
        self.username = username
        self.roles = roles or ['admin']

    def save(self):
        print('save')
        print(db)
        return db.users.insert_one({'email_address': self.email_address, 'password': self.password, 'username': self.username, 'roles': self.roles})

    @staticmethod
    def find_by_email_address(email_address):
        print('email_address')
        print(db)
        return db.users.find_one({'email_address': email_address})

    @staticmethod
    def find_by_id(user_id):
        return db.users.find_one({'_id': user_id})
