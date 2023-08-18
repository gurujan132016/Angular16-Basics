import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators,FormArray} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myReactiveForm!:FormGroup

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  constructor(){

  }


  ngOnInit(){
      this.myReactiveForm=new FormGroup({
        'userDetail':new FormGroup({
          'username':new FormControl(null, Validators.required),
          'email': new FormControl (null,  [Validators.required, Validators.email]),
        }),
        'cource': new FormControl ('Angular'),
        'gender': new FormControl ('Male'),
        'skills': new FormArray([
          new FormControl (null,Validators.required),
        ])
      });
      console.log('hello');
      console.log( this.myReactiveForm);
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
}
