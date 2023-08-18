import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  @ViewChild('myForm') myForm!:NgForm;
  defaultCourse='Angular';
  userName='';
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  defaultGender='Male';
  submitted=false;
  formData={
    username:'',
    email: '',
    cource: '',
    gender: ''
  }

  constructor(){

  }
  //submit form without view child
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  //submit form using view child
  onSubmit(){
    console.log(this.myForm);
    this.submitted=true;
    this.formData.username=this.myForm.value.userDetail.username;
    this.formData.email=this.myForm.value.userDetail.email;
    this.formData.cource=this.myForm.value.cource;
    this.formData.gender=this.myForm.value.gender;
    this.myForm.reset();
    alert('Form data has been populated to the below Submit button.');
  }



  setUsername(){

    // setValue() 
    // We can set the form values using setValue() method.
    // When we use setValue() we have to specify all the form properties. 
    // For example we are trying to update only username value using update button, but setValue() will update all remaining properties, because all the properties are defined in setValue() method with default values. 
    // this.myForm.setValue({
    //   userDetail:{
    //     username: 'CodeCirculation',
    //     email:'hsharma@gmail.com'
    //   },
    //   cource:'Html',
    //   gender:'Female'
    // })

    // patchValue() 
    // We can update any specific form property using patchValue() method
    this.myForm.form.patchValue({
      userDetail:{
        username:'CodeCirculation',
      }
    })


  }

}
