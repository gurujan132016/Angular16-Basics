import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { }

  url:string='https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<any>{
    return this.http.get(this.url);
  }
}
