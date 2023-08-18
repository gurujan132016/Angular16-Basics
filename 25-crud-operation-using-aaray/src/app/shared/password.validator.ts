import { AbstractControl, Validator, ValidatorFn,AsyncValidatorFn } from "@angular/forms";

export function PasswordValidator(control:AbstractControl):{[Key:string]:boolean} | null {
  //fetch the password value from the parent/sibling 
  const password=control?.parent?.value.password;
  //currently selected value is confirm password, so directly check the value.
  const confirmPassword=control?.value;

  if(password?.pristine || confirmPassword?.pristine){
      return null;
  }
  return password!=confirmPassword?{'misMatch':true}:null;
}

