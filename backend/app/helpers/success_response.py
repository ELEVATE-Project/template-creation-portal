from flask import jsonify


def success_response(data=None, status_code=200):
    response = {
        'data': data,
    }
    return jsonify(response), status_code
