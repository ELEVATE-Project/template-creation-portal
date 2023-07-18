# project/app/routes/user_routes.py

from flask import jsonify,Blueprint
from app.controller import UserController
from app import app


@app.route('/api/v1', methods=['GET'])
def index():
    print("index")
    return jsonify({'message': 'Welcome to the Auth API'}), 200


@app.route('/api/v1/users/signup', methods=['POST'])
def signup():
    print("signup")
    return UserController.signup()


@app.route('/api/v1/users/login', methods=['POST'])
def login():
    print("login")
    return UserController.login()
