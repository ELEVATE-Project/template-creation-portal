
from app import db

class SheetStructure:

    def __init__(self):
        pass

    def getSheetFields(type):
        return db.sheetStructure.find_one({type: type})