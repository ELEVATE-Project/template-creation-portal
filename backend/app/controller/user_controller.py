# app/controllers/auth_controller.py
import hashlib

from app.helpers.auth_utilities import generate_token
from app.helpers.error_response import error_response
from app.helpers.success_response import success_response
from app.middleware.commonAuth import admin_token_required
from app.services import UserService
from flask import jsonify, request

from app.validators.user_validator import UserValidator


class UserController:

    @staticmethod
    def signup():
        try:
            data = request.get_json()
            email = data['email']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()
            first_name = data['first_name']
            last_name = data['last_name']
            username = first_name + ' ' + last_name
            if not UserValidator.is_valid(email, password):
                return error_response('Invalid email or password', 400)

            if UserService.find_user_by_email(email):
                return error_response('email already exists', 409)

            user_id = UserService.create_user(email, password, username)
            return success_response({'message': 'User created successfully', 'user_id': str(user_id)})
        except Exception as e:
            error_message = str(e)
            return error_response(error_message, 500)

    @staticmethod
    def login():
        try:
            data = request.get_json()
            email = data['email']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

            if not UserValidator.is_valid(email, password):
                return error_response('Invalid email or password', 400)

            user = UserService.find_user_by_email(email)
            if not user or user['password'] != password:
                return error_response('Invalid email or password', 401)

            access_token = None
            if user:
                try:
                    access_token = generate_token(user['_id'])
                except Exception as e:
                    raise Exception(str(e))

            return success_response({'message': 'User logged in successfully', 'user_id': str(user['_id']), "access_token": access_token})
        except Exception as e:
            error_message = str(e)
            print(error_message, 500)
            return error_response(error_message, 500)
