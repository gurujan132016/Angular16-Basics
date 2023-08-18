import { Component, OnInit } from '@angular/core';
import {DesignutilityService} from '../appServices/designutility.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-viewuserinformation',
  templateUrl: './viewuserinformation.component.html',
  styleUrls: ['./viewuserinformation.component.css']
})
export class ViewuserinformationComponent implements OnInit {
  
  id: number=0;
  user:any;

  constructor(private _designServices:DesignutilityService, private router: Router, private activatesRoute: ActivatedRoute){
  }
  
  ngOnInit() {
    this.activatesRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.user=this._designServices.userListSubject.value.filter(user=>user.id==this.id)[0];  
  }

  redirectToUserListPage() {
    this.router.navigate(['/userlist']);
  }
}
