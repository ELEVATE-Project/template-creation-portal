# app/controllers/auth_controller.py
import hashlib

from app.services import UserService
from flask import jsonify, request

from app.validators.user_validator import UserValidator


class UserController:

    @staticmethod
    def signup():
        try:
            data = request.get_json()
            email_address = data['email_address']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()
            first_name = data['first_name']
            last_name = data['last_name']
            username = first_name + ' ' + last_name
            if not UserValidator.is_valid(email_address, password):
                return jsonify({'message': 'Invalid email_address or password'}), 400

            if UserService.find_user_by_email_address(email_address):
                return jsonify({'message': 'email_address already exists'}), 409

            user_id = UserService.create_user(email_address, password, username)
            return jsonify({'message': 'User created successfully', 'user_id': str(user_id)}), 201
        except Exception as e:
            error_message = str(e)
            return {'error': error_message}, 500

    @staticmethod
    def login():
        try:
            data = request.get_json()
            email_address = data['email_address']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

            if not UserValidator.is_valid(email_address, password):
                return jsonify({'message': 'Invalid email_address or password'}), 400

            user = UserService.find_user_by_email_address(email_address)
            if not user or user['password'] != password:
                return jsonify({'message': 'Invalid email_address or password'}), 401

            return jsonify({'message': 'Login successful'}), 200
        except Exception as e:
            error_message = str(e)
            return {'error': error_message}, 500
