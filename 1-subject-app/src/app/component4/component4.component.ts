import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {
  constructor(private _designServices:DesignutilityService){
    this._designServices.userName.subscribe(uname=>{
      this.userName=uname
    })
  }

  ngOnInit(){

  }
  //For Subject.
  //userName:string="Code Circulation"

  //For BehaviorSubject
  userName:string="";
  updateUserName(uname:any){
    this._designServices.userName.next(uname.value)
  }
}
