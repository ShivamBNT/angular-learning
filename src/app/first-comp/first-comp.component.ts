import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.sass']
})
export class FirstCompComponent {


  color = 'white'
  fontsize= 34;
  backgroundcolor= 'grey'


  isActive= true

  Invalidate = true
}
