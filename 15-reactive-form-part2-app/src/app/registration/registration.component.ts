import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'

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
        'gender': new FormControl ('Male')
      });
  }

  onSubmit(){
    console.log(this.myReactiveForm);
  }


}
