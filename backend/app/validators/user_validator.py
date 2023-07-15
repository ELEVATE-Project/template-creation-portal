# project/app/validators/user_validator.py

class UserValidator:
    @staticmethod
    def is_valid(username, password):
        if not username or not password:
            return False
        return True
