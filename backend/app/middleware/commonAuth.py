from functools import wraps
import jwt
from flask import request, abort
from flask import current_app

from app import admin_token
from app.services import UserService


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "Authorization" in request.headers:
            token = request.headers["Authorization"].split(" ")[1]
        if not token:
            return {
                "message": "Authentication Token is missing!",
                "data": None,
                "error": "Unauthorized"
            }, 401
        try:
            data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
            current_user = UserService.get_by_id(data["user_id"])
            if current_user is None:
                return {
                    "message": "Invalid Authentication token!",
                    "data": None,
                    "error": "Unauthorized"
                }, 401
            if not current_user["active"]:
                abort(403)
        except Exception as e:
            return {
                "message": "Something went wrong",
                "data": None,
                "error": str(e)
            }, 500

        return f(current_user, *args, **kwargs)

    return decorated


def admin_token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        print("admin_token_required")
        auth = None
        if "Authorization" in request.headers:
            auth = request.headers.get('admin-token')

        if not auth:
            return {
                "message": "Authentication Token is missing!",
                "data": None,
                "error": "Unauthorized"
            }, 401

        else:
            # the auth token is present in the header and check the token present in the env file
            if not auth == admin_token:
                return {"message": "Invalid Authentication token!", "data": None, "error": "Unauthorized"}, 401

        return f(*args, **kwargs)

    return decorated
