import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users:any;
  constructor(private  _service :DesignUtilityService){
  }
  ngOnInit(): void {
   this._service.getUsers()
   .subscribe(usersData=>this.users=usersData);
  }

}
