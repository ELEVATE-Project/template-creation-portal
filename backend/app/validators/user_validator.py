# project/app/validators/user_validator.py
import re

class UserValidator:
    @staticmethod
    def is_valid(email_address, password):
        if not UserValidator.validate_email_regex(email_address):
            return False
        if not email_address or not password:
            return False
        return True

    @staticmethod
    def validate_email_regex(email):
        pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if re.match(pattern, email):
            return True
        else:
            return False
