import pymongo


def connectDb(url,database_name):
    client = pymongo.MongoClient(url)
    db = client[database_name]
    return db
