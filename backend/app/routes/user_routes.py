# project/app/routes/user_routes.py

from flask import jsonify, Blueprint
from app.controller import UserController
from app import app
from app.middleware.commonAuth import admin_token_required


@app.route('/api/v1', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to the Auth API'}), 200


@app.route('/api/v1/users/signup', methods=['POST'])
@admin_token_required
def signup():
    return UserController.signup()


@app.route('/api/v1/users/login', methods=['POST'])
def login():
    return UserController.login()
