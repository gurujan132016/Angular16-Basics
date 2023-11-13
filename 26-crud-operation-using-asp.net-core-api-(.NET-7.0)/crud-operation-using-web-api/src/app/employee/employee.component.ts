import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';
import {FormBuilder,Validators,AbstractControlOptions } from '@angular/forms';
import {Employee} from '../model/employee'
import { AbstractControl, Validator, ValidatorFn,AsyncValidatorFn } from "@angular/forms";
import {EmployeeService}from '../shared/employee.service'

@Component({
  selector: 'app-createemployee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router, private activatesRoute: ActivatedRoute, private _employeeService:EmployeeService){

  }

  employeeId:string='';
  employee:Employee={
    id:'00000000-0000-0000-0000-000000000000"',
    firstName : '',
    middleName : '',
    lastName : '',
    email:'',
    mobile : '',
    company : '',
    salary : 0,
    country:'',
    state:'',
    city:'',
  };
  employeeForm!:FormGroup;

  ngOnInit(): void {
    this.activatesRoute.paramMap.subscribe(params => {
      this.employeeId = String(params.get('id'));
    });

    this.employeeForm = this.fb.group({
      firstName : ['',[Validators.required]],
      middleName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,this.mobileNumberValidator]],
      company:['',[Validators.required]],
      salary:['',[Validators.required,this.SalaryValidator]],
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
    });

    if(this.employeeId!=null &&this.employeeId!="null" && this.employeeId!=undefined && this.employeeId!='' && this.employeeId!='00000000-0000-0000-0000-000000000000'){
      this._employeeService.getEmployeeById(this.employeeId).subscribe({
        next:(data)=>{
          this.employeeForm.patchValue({
            firstName : data?.firstName,
            middleName : data?.middleName,
            lastName:data?.lastName,
            email : data?.email,
            mobile : data?.mobile,
            company : data?.company,
            salary:data?.salary,
            country:data?.country,
            state:data?.state,
            city:data?.city,
          })
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
  }
  
  onSubmit(){
    this.employee.id="00000000-0000-0000-0000-000000000000";
    this.employee.firstName= this.employeeForm.value?.firstName;
    this.employee.middleName= this.employeeForm.value?.middleName;
    this.employee.lastName= this.employeeForm.value?.lastName;
    this.employee.email= this.employeeForm.value?.email;
    this.employee.mobile= this.employeeForm.value?.mobile;
    this.employee.company= this.employeeForm.value?.company;
    this.employee.salary= this.employeeForm.value?.salary;
    this.employee.country= this.employeeForm.value?.country;
    this.employee.state= this.employeeForm.value?.state;
    this.employee.city= this.employeeForm.value?.city;

    if(this.employeeId!=null &&this.employeeId!="null" && this.employeeId!=undefined && this.employeeId!='' && this.employeeId!='00000000-0000-0000-0000-000000000000'){
      this.employee.id=this.employeeId;
      this._employeeService.UpdateEmployee(this.employee).subscribe({
        next:(data)=>{
            if(data.isSuccess){
              this.redirectToEmployeeListPage()
            }
            else{
              alert(data.Messages[0])
            }
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    else{
      this._employeeService.CreateEmployee(this.employee).subscribe({
        next:(data)=>{
            if(data.isSuccess){
              this.redirectToEmployeeListPage()
            }
            else{
              alert(data.Messages[0])
            }
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
  }

  mobileNumberValidator(control:AbstractControl) {
    // You can customize this validator based on your requirements.
    const mobileNumber = control.value;
    const mobilePattern = /^\d{10}$/; // Adjust the regex pattern as needed.

    if (mobilePattern.test(mobileNumber)) {
      return null; // Validation passed.
    } else {
      return { invalidMobileNumber: true }; // Validation failed.
    }
  }

  SalaryValidator(control:AbstractControl) {
    // You can customize this validator based on your requirements.
    const salary = control.value;
    const salaryPattern = /^[0-9]+$/; // Adjust the regex pattern as needed.

    if (salaryPattern.test(salary)) {
      return null; // Validation passed.
    } else {
      return { invalidSalary: true }; // Validation failed.
    }
  }
  
  redirectToEmployeeListPage() {
    this.router.navigate(['/employeelist']);
  }
}
