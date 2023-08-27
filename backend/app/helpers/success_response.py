from flask import jsonify


def success_response(data=None, message="Great news! Everything worked perfectly and your task was successfully completed. 😄🎉", status_code=200):
    response = {
        'data': data,
        'message': message
    }
    return jsonify(response), status_code
