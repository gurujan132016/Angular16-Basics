import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
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
