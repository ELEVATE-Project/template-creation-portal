sample_form = [
    {
        "name": "username",
        "label": 'Enter the Diksha username/user id/email id/phone no. of the Program Designer',
        "description": "",
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
        "label": 'Select the State name you are targeting.',
        "value": "",
        "class": 'ion-margin',
        "type": 'dropdown',
        "position": 'floating',
        "errorMessage": 'This field can only contain alphabets',
        "validators":{
            "required": True,
            "pattern": '^[a-zA-Z ]*$'
        }
    },

]