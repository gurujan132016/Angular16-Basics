import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee'
import {EmployeeService}from '../shared/employee.service'
import { Router } from '@angular/router';
import { AbstractControl, Validator, ValidatorFn,AsyncValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


  constructor(private _employeeService:EmployeeService,private router: Router){

  }

  employeeList:Employee[]=[];
  ngOnInit() {
    this._employeeService.getAllEmployee().subscribe({
      next:(data)=>{
        this.employeeList = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  redirectToCreateEmployeePage() {
    this.router.navigate(['/create']);
  }

  viewEmployeeInformation(id:string){
    this.router.navigate(['/view',id]);
  }
  deleteUserInformation(id:string){
    const confirmation = window.confirm('Do you want to delete this record?');
    if(confirmation){
      if(id!=null && id!=undefined){
        this._employeeService.deleteEmployeeById(id).subscribe({
          next:(data)=>{
            if(data.isSuccess){
              this._employeeService.getAllEmployee().subscribe({
                next:(data)=>{
                  this.employeeList = data;
                },
                error:(error)=>{
                  console.log(error);
                }
              })
            }
            else{
              alert(data.Messages[0]);
            }
          },
          error:(error)=>{
            console.log(error);
          }
        })
      }
    }
  }

  editEmployeeInformation(id:string){
    this.router.navigate(['/update',id]);
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

}
