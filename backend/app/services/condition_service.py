

from app.models.conditions import Conditions


class ConditionService:

    @staticmethod
    def get_condition_data(name):
        condition = Conditions.get_condition(name)
        print(condition)
        if condition:
            return condition[name]
        else:
            return None