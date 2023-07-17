# project/app/routes/user_routes.py

from flask import jsonify,Blueprint
from app.controller import UserController

user_routes = Blueprint('user_routes', __name__)
@user_routes.route('/api/v1', methods=['GET'])
def index():
    print("index")
    return jsonify({'message': 'Welcome to the Auth API'}), 200


@user_routes.route('/api/v1/users/signup', methods=['POST'])
def signup():
    print("signup")
    return UserController.signup()


@user_routes.route('/api/v1/users/login', methods=['POST'])
def login():
    print("login")
    return UserController.login()
