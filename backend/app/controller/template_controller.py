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
        data = {
        'sheet_list':['program_details', 'resource_details', 'program_manager_details'],
        'data' :[
        
            {
            'program_details': [
                {
        "name": "username",
        "label": 'Diksha username/user id/email id/phone no. of the Program Designer',
        "description":"Enter the Diksha username/user id/email id/phone no. of the Program Designer",
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
        "options": [{"label": "Teacher"},{"label": "HT & Officials"},{"label": "Teacher,HT & Officials"}],
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            
        }
    },
    {
         "name": "subrole",
        "label": 'Targeted subrole at program level',
        "value": "",
        "class": 'ion-margin',
        "type": 'text',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators": {
            "required": False,
            "dependency": [{
                "depends": "role",
                "value":  ["HT & Officials"]
            }]
        }
    },
    {
    
         "name": "start_date",
        "label": 'Start Date of program',
        "value": "",
        "class": 'ion-margin',
        "type": 'date',
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
        "type": 'date',
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
                   {
                       "name": "resource_name",
        "label": 'Name of resources in program',
        "description": 'Enter the name of the resources in program',
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
         "name": "resource_type",
        "label": 'Type of resources',
        "description":  "Select the type of resources",
        "value": "",
        "class": 'ion-margin',
        "type": 'select',
        "options": [{"label": "Observation without rubrics"},{"label": "Observation with rubrics"},{"label": "Improvement Project"}],
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True
        }
    },
    {
                       "name": "resource_link",
        "label": 'Resource link',
        "description": 'Observation/Survey/Project - Please add the template link.(Sheet permission - set to be anyone with the link can view)',
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
         "name": "resource_status",
        "label": 'Type of resources',
        "description":  "Select \"Existing\" if the Resource is already uploaded and mapped to the program.\n Select \"New Upload\" if the Resource is Not uploaded to the Diksha Platform.",
        "value": "",
        "class": 'ion-margin',
        "type": 'select',
        "options": [{"label": "Existing"},{"label": "New Upload"}],
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True
        }
    },
    {
                       "name": "target_role",
        "label": 'Target role at the resource level',
        "description": 'Define the roles, who should access the Resource EX: Teacher,HT & Officials',
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
                       "name": "target_subrole",
        "label": 'Targeted subrole at resource level',
        "description": 'Mandatory if role selected as HT & Officials. Define the sub-roles, who should access the form Ex:HM,DEO etc.',
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
         "name": "start_date",
        "label": 'Start Date of resource',
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
        "label": 'End Date of resource',
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
        }
        return success_response(data)