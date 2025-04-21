import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.sass']
})
export class ParentCompComponent {
  fruits : string[] = ['Apple','Banana','Grapes','Oranges']

  isTrue = false

  parentName :string = "Parent Value "

  message: string= ''

  getMsgFromChild(msg:string)
  {
    this.message=msg;
  }
  
  getCapitalIplTeam(msg:string)
  {
    this.message = msg;
  }

}
