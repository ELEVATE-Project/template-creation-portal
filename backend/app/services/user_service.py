# project/app/services/user_service.py

from app.models.user import User


class UserService:
    @staticmethod
    def create_user(username, password):
        user = User(username, password)
        return user.save()

    @staticmethod
    def find_user_by_username(username):
        return User.find_by_username(username)
