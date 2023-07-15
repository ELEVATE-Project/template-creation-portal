from app import db


class Sheet:
    def __int__(self, sheet_name, template_id, user_id, header):
        self.sheet_name = sheet_name
        self.template_id = template_id
        self.user_id = user_id
        self.header = header

    def save(self):
        return db.sheets.insert_one(
            {'sheet_name': self.sheet_name, 'template_id': self.template_id, 'user_id': self.user_id,
             'header': self.header})

    @staticmethod
    def find_by_id(sheet_id):
        return db.sheets.find_one({'_id': sheet_id})

    @staticmethod
    def find_by_template_id(template_id):
        return db.sheets.find_one({'template_id': template_id})

    @staticmethod
    def find_by_user_id(user_id):
        return db.sheets.find_one({'user_id': user_id})

    @staticmethod
    def add_row(user_id, template_id, row):
        return db.sheets.find_one_and_update({'_id': template_id, }, {'$push': {'data': row}})
