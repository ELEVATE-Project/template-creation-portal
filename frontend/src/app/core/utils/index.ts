import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import * as _ from "lodash";

export function convertToTitleCase(inputString: string): string{
    const words = inputString.split('_');
    
    const titleCaseString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return titleCaseString;
}



export function showFieldValidator(form: FormGroup, fieldName:string, allowedValues: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
  
    const fieldInfo = form.get(fieldName);
   if(fieldInfo){
    if(!_.isEmpty(fieldInfo?.value)){
    var value: any = _.get(fieldInfo?.value[0], "label", null);
   
    
    if (allowedValues.includes(value)) {
   
      // Allowed value, no validation error
      return null;
    } else {
      // Not allowed value, return validation error
      
      return { showFieldError: true };
    }
  }
  };
  return null;
  }
}
