import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.sass']
})
export class ChildCompComponent {

 @Input() name:string = ''
 @Output() sendMsg = new EventEmitter<string>
 
@Input() iplName:string = 'Delhi Charger'

@Output() getCapital = new EventEmitter<string>

 PressMe(){
  this.sendMsg.emit("Voila!!! Get Message")
 }

 converToCapital()
 {
  this.getCapital.emit(this.iplName.toUpperCase())
 }
}
