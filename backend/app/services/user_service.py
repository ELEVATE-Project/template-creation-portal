# project/app/services/user_service.py

from app.models import User


class UserService:
    @staticmethod
    def create_user(email, password, username):
        user = User(email, password, username)
        return user.save()

    @staticmethod
    def find_user_by_email(email):
        return User.find_by_email(email)
