from flask import jsonify


def error_response(message, status_code):
    response = {
        'error': message,
    }
    return jsonify(response), status_code
