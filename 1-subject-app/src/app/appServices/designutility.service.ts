import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  //Subject. Here we can not define the initial value.
  //username=new Subject<any>();

  //BehaviorSubject. Here we can define the initial value and it will be reflected to all the components.
  userName=new BehaviorSubject("Code Circulation")
}
