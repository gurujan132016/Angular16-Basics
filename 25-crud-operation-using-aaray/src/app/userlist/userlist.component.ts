import { Component, OnInit } from '@angular/core';
import {DesignutilityService} from '../appServices/designutility.service'
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(private _designServices:DesignutilityService,private router: Router){

  }
  userListResults: User[] = [];
  nameSearch:string='';

  ngOnInit() {
    this._designServices.geUserListsObservable().subscribe(users => {
      this.userListResults = users;
    });
  }
  
  redirectToRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  viewUserInformation(id:number){
    this.router.navigate(['/viewuserinformation',id]);
  }

  editUserInformation(id:number){
    this.router.navigate(['/registration',id]);
  }

  deleteUserInformation(id:number){
    const confirmation = window.confirm('Do you want to delete this record?');
    if(confirmation){
      if(id!=null && id!=0 && id!=undefined){
        const currentUserList = this._designServices.userListSubject.value;
        const updatedUserList = currentUserList.filter(user => user.id !== id);
        this._designServices.userListSubject.next(updatedUserList)
      }
    }
  }
}
