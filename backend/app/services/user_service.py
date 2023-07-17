# project/app/services/user_service.py

from app.models import User


class UserService:
    @staticmethod
    def create_user(email_address, password, username):
        user = User(email_address, password, username)
        return user.save()

    @staticmethod
    def find_user_by_email_address(email_address):
        return User.find_by_email_address(email_address)
