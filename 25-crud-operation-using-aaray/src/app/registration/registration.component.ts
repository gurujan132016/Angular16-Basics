import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';
import {FormBuilder,Validators,AbstractControlOptions } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import {User} from '../model/user'
import {DesignutilityService} from '../appServices/designutility.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private _designServices:DesignutilityService, private router: Router, private activatesRoute: ActivatedRoute){

  }
  id: number=0;

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  cources=[
    {id:'1',value:'Angular'},
    {id:'2',value:'React & Redux'},
    {id:'3',value:'Asp.Net Core'}
  ]

  get email(){
    return this.registrationForm.get('email');
  } 

  togglePasswordControl(){
    const passwordControl = this.registrationForm.get('password');
    const confirmPasswordControl = this.registrationForm.get('confirmPassword');

    if(this.id!=0){
      passwordControl?.disable();
      confirmPasswordControl?.disable();
    }else{
      passwordControl?.enable();
      confirmPasswordControl?.enable();
    }
  }

  registrationForm!:FormGroup;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      userName : ['',[Validators.required]],
      password : ['',[Validators.required]],
      confirmPassword : ['',[Validators.required,PasswordValidator]],
      dob:['',[Validators.required]],
      cource:['',[Validators.required]],
      gender:['',[Validators.required]],
      subscribe:[false],
    });

    this.activatesRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    if(this.id!=0){
      const userObj =this._designServices.userListSubject.value.find(user=>user.id==this.id);
      this.registrationForm.patchValue({
        firstName : userObj?.firstName,
        lastName : userObj?.lastName,
        email:userObj?.email,
        userName : userObj?.userName,
        password : userObj?.password,
        confirmPassword : userObj?.confirmPassword,
        dob:userObj?.dob,
        cource:userObj?.cource,
        gender:userObj?.gender,
        subscribe:userObj?.subscribe,
      })
    }

    this.togglePasswordControl()
  }
    
  onSubmit(){
    const user=new User(
      this.registrationForm.value?.firstName,
      this.registrationForm.value?.lastName,
      this.registrationForm.value?.email,
      this.registrationForm.value?.userName,
      this.registrationForm.value?.password,
      this.registrationForm.value?.confirmPassword,
      this.registrationForm.value?.dob,
      this.registrationForm.value?.cource,
      this.registrationForm.value?.gender,
      this.registrationForm.value?.subscribe,
    );

    if(this.id!=0 && user!=null && user!=undefined){
      const currentUserList = this._designServices.userListSubject.value;
      const index = currentUserList.findIndex(user => user.id === this.id);
      if (index !== -1) {
        currentUserList[index] = user;
        this._designServices.userListSubject.next(currentUserList);
      }
    }
    else{
      const currentUserList = this._designServices.userListSubject.value;
      this._designServices.userListSubject.next([...currentUserList,user]);
    }
    this.redirectToUserListPage();
  }

  redirectToUserListPage() {
    this.router.navigate(['/userlist']);
  } 
}
