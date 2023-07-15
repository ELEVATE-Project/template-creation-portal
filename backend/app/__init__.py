# project/app/__init__.py
import os
import sys

from flask import Flask
import pymongo
from dotenv import load_dotenv

app = Flask(__name__)

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
app.config['MONGO_URI'] = os.environ.get('MONGO_URI')
mongo_client = pymongo.MongoClient(app.config['MONGO_URI'])
database_name = os.environ.get('DATABASE_NAME')
db = mongo_client[database_name]

# Verify database connection
if db:
    print('Connected to MongoDB')
else:
    print('Failed to connect to MongoDB')



from app.routes import user_routes
