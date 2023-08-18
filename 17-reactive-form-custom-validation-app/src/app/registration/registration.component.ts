import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators,FormArray, AbstractControl,AsyncValidatorFn } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myReactiveForm!:FormGroup
  notAllowednames=['Codecirculation','hitesh']

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  constructor(){

  }

  ngOnInit(){
      this.myReactiveForm=new FormGroup({
        'userDetail':new FormGroup({
          'username': new FormControl('',[Validators.required,this.NaNames.bind(this)]),
          'email': new FormControl (null,  [Validators.required, Validators.email],this.checkEmailAvailability()),
        }),
        'cource': new FormControl ('Angular'),
        'gender': new FormControl ('Male'),
        'skills': new FormArray([
          new FormControl (null,Validators.required),
        ])
      });

      // this.myReactiveForm.valueChanges.subscribe(
      //   (value)=> console.log(value)
      // )

      this.myReactiveForm.statusChanges.subscribe(
        (status)=>{
          console.log(status)
        }
      )

      // setTimeout(()=>{
      //   this.myReactiveForm.setValue({
      //     'userDetail':{
      //       'username':'john',
      //       'email':'john@gmail.com'
      //     },
      //     'cource':'Angulart',
      //     'gender':'Male',
      //     'skills':['React']
      //   })
      // },4000)

      this.myReactiveForm.patchValue({
        'userDetail':{
          'username':'john'
        }
      })
  }

  // Helper method to access the form array control
  get skillItems(): FormArray {
      return this.myReactiveForm.get('skills') as FormArray;
  }

  onSubmit(){
    console.log(this.myReactiveForm);
  }
  onAddSkills(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }

  NaNames(control: FormControl): { [key: string]: any } | null {
    if(this.notAllowednames.indexOf(control.value)!==-1){
      return{'nameIsNotAllowed': true}
    }
    return null;
  }


  // Custom async validator function
  checkEmailAvailability(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<{ [key: string]: any } | null> | Observable<{ [key: string]: any } | null> => {
      const emailValue = control.value;
      return this.checNaEmails(emailValue);
    };
  }

  checNaEmails(email: string): Promise<{ [key: string]: any } | null> {
    const myResponse=new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(email==='hitesh@gmail.com'){
          resolve({'emailNotAllowed':true})
        }
        else{
          resolve(null)
        }
      },1500)
    })
    return myResponse;
  }
}

