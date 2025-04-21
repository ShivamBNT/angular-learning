import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.sass']
})
export class BindingComponent {

  isDisabled =false
  count =0

  userName = '';

  msg = "used for increase value"

  increaseValue()
  {
    this.count++
  }

}
