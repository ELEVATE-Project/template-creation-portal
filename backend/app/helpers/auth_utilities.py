import jwt

from app import signing_key


def generate_token(user_id):
    try:
        payload = {
            "iss": "Auth API",
            "user_id": str(user_id)
        }
        token = jwt.encode(payload, signing_key, algorithm="HS256")
        return token
    except Exception as e:
        raise Exception(str(e))
