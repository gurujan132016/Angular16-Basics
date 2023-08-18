import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
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
