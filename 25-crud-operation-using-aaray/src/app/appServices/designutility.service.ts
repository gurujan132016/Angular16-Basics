import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject,Observable,map } from 'rxjs';
import {User} from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  public userListSubject = new BehaviorSubject<User[]>([]);
  userList$ = this.userListSubject.asObservable();

  geUserListsObservable(): Observable<any[]> {
    return this.userListSubject.asObservable();
  }
  
}
