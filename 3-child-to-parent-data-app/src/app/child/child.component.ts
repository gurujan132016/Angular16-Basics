import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() selectUserName=new EventEmitter<any>();

  sendUserNameToChildComponent(uname:any){
    this.selectUserName.emit(uname.value);
  }

}
