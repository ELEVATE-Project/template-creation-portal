# project/app/__init__.py
import os
import sys

from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS

from app.database import connectDb

app = Flask(__name__)

CORS(app)

# get the base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# load the .env file
dotenv_path = os.path.join(BASE_DIR, '../.env')
# check env file  is accessible or not
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
else:
    print('".env" is missing.')
    sys.exit(1)
# connect to mongo db and collection instance function
mongo_uri = os.environ.get('MONGO_URI')
database_name = os.environ.get('DATABASE_NAME')
admin_token = os.environ.get('ADMIN_TOKEN')
signing_key = os.environ.get('SECRET_KEY')
db = connectDb(mongo_uri, database_name)

# Verify database connection
if db:
    print('Connected to MongoDB')
else:
    print('Failed to connect to MongoDB')
    sys.exit(1)


from app.routes import user_routes
from app.routes import template_routes
