# project/app/routes/auth_routes.py
import hashlib

from flask import jsonify, request

from app import app
from app.validators.user_validator import UserValidator
from app.services.user_service import UserService

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to the Auth API'}), 200
@app.route('/v1/users/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

    if not UserValidator.is_valid(username, password):
        return jsonify({'message': 'Invalid username or password'}), 400

    if UserService.find_user_by_username(username):
        return jsonify({'message': 'Username already exists'}), 409

    user_id = UserService.create_user(username, password)
    return jsonify({'message': 'User created successfully', 'user_id': str(user_id)}), 201


@app.route('/v1/users/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = hashlib.md5(data['password'].encode('utf-8')).hexdigest()

    if not UserValidator.is_valid(username, password):
        return jsonify({'message': 'Invalid username or password'}), 400

    user = UserService.find_user_by_username(username)
    if not user or user['password'] != password:
        return jsonify({'message': 'Invalid username or password'}), 401

    return jsonify({'message': 'Login successful'}), 200
