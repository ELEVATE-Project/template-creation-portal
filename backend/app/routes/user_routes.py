# project/app/routes/user_routes.py

from flask import jsonify

from app import app
from app.controller.user_controller import UserController


@app.route('/api/v1', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to the Auth API'}), 200


@app.route('/api/v1/users/signup', methods=['POST'])
def signup():
    return UserController.signup()


@app.route('/api/v1/users/login', methods=['POST'])
def login():
    return UserController.login()
