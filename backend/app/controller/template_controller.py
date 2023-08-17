from app.helpers.success_response import success_response


class TemplateController:

    @staticmethod
    def getTemplateList():
        pass

    @staticmethod
    def getDraftTemplate():
        pass

    @staticmethod
    def getTemplate():
        pass

    @staticmethod
    def getAllTemplates():
        pass

    @staticmethod
    def createTemplate():
        pass

    @staticmethod
    def updateTemplate():
        pass

    @staticmethod
    def deleteTemplate():
        pass

    @staticmethod
    def saveAsDraft():
        pass

    @staticmethod
    def publishTemplate():
        pass

    @staticmethod
    def getTemplateInstruction():
        pass

    @staticmethod
    def getProjectTemplate():
        data = [
            {
            'program_details': [
                {
        "name": "username",
        "label": 'Diksha username/user id/email id/phone no. of the Program Designer',
        "description":"hgh",
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
        "name": "State",
        "label": 'Targeted state at program level',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "district",
        "label": 'Targeted district at program level',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": False,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "title",
        "label": 'Title of the Program',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "description",
        "label": 'Desscription of the Program',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "keywords",
        "label": 'Keywords',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": False,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "role",
        "label": 'Targeted role at program level',
        "value": "",
        "class": 'ion-margin',
        "type": 'select',
        "options": [{"label": "a"},{"label": "b"},{"label": "c"}],
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True
        }
    },
    {
    
         "name": "start_date",
        "label": 'Start Date of program',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
        
         "name": "end_date",
        "label": 'End Date of program',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    
    }
            ]
            },
            {
               'resource_details': [
                   
               ] 
            },
            {
                'program_manager_details': [
{
        "name": "sso_user",
        "label": 'Is SSO user',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },
    {
         "name": "start_date",
        "label": 'Start Date of program',
        "value": "",
        "class": 'ion-margin',
        "type": 'date',
        "position": 'floating',
        "errorMessage": 'Please select the appropriate date',
        "validators":{
            "required": False,
        
        }
    },
    {
         "name": "end_date",
        "label": 'End Date of program',
        "value": "",
        "class": 'ion-margin',
        "type": 'date',
        "position": 'floating',
        "errorMessage": 'Please select the appropriate date',
        "validators":{
            "required": False,
        
        }
    }
                ]
            }
        ]

        return success_response(data)