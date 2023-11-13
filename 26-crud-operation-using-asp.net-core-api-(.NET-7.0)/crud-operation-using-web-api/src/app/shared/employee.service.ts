import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Employee,Response} from '../model/employee'

@Injectable({
    providedIn: 'root'
  })

  export class EmployeeService {
    constructor(private formBuilder: FormBuilder,
        private http: HttpClient) { }

     readonly baseUrl = 'https://localhost:7114/api';

     getAllEmployee():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl+'/Employee/GetAll')
     }

     CreateEmployee(employee:Employee):Observable<Response>{
      return this.http.post<Response>(this.baseUrl + '/Employee/Create', employee);
     }

     getEmployeeById(id:string):Observable<Employee>{
      return this.http.get<Employee>(this.baseUrl + '/Employee/GetById/'+id);
     }
     deleteEmployeeById(id:string):Observable<Response>{
      return this.http.delete<Response>(this.baseUrl + '/Employee/Delete/'+id);
     }
     UpdateEmployee(employee:Employee):Observable<Response>{
      return this.http.put<Response>(this.baseUrl + '/Employee/Update/'+employee.id, employee);
     }

  }