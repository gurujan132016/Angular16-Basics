import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee'
import {EmployeeService}from '../shared/employee.service'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private _employeeService:EmployeeService,private router: Router,private activatesRoute: ActivatedRoute){

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

  ngOnInit(): void {
      this.activatesRoute.paramMap.subscribe(params => {
        this.employeeId = String(params.get('id'));
      });
      this._employeeService.getEmployeeById(this.employeeId).subscribe({
      next:(data)=>{
        this.employee = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  redirectToEmployeeListPage() {
    this.router.navigate(['/employeelist']);
  }
}
