import jwt

from app import signing_key


def generate_token(user_id):
    try:
        message = {
            "iss": "",
            "user_id": str(user_id)
        }
        token = jwt.encode({'message': message }, signing_key, algorithm="HS256")
        return token
    except Exception as e:
        raise Exception(str(e))
