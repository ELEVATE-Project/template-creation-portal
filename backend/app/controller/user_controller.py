# app/controllers/auth_controller.py
import hashlib

from app.services.user_service import UserService
from flask import jsonify, request

from app.validators.user_validator import UserValidator


class UserController:

    @staticmethod
    def signup():
        try:
            data = request.get_json()
            username = data['username']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

            if not UserValidator.is_valid(username, password):
                return jsonify({'message': 'Invalid username or password'}), 400

            if UserService.find_user_by_username(username):
                return jsonify({'message': 'Username already exists'}), 409

            user_id = UserService.create_user(username, password)
            return jsonify({'message': 'User created successfully', 'user_id': str(user_id)}), 201
        except Exception as e:
            error_message = str(e)
            return {'error': error_message}, 500

    @staticmethod
    def login():
        try:
            data = request.get_json()
            username = data['username']
            password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

            if not UserValidator.is_valid(username, password):
                return jsonify({'message': 'Invalid username or password'}), 400

            user = UserService.find_user_by_username(username)
            if not user or user['password'] != password:
                return jsonify({'message': 'Invalid username or password'}), 401

            return jsonify({'message': 'Login successful'}), 200
        except Exception as e:
            error_message = str(e)
            return {'error': error_message}, 500