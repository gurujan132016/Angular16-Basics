import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  selectUserName:string="";
  sendUserNameToChildComponent(uname:any){
    this.selectUserName=uname.value;
  }

}
