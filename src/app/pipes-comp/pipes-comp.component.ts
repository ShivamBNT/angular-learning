import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-comp',
  templateUrl: './pipes-comp.component.html',
  styleUrls: ['./pipes-comp.component.sass']
})
export class PipesCompComponent {

  today: Date = new Date();

  number = 4.57566;

  percentage = 0.36

  data: string = "hello world";

  person = {
    name: 'Shivam Gogawale',
    a: 'vijaya',
    abc: 'bishnu',
    age: 28
  };

  message:string = "A smooth sea never made a skilled sailor";

  gender = 'male'

  genderMap = {
    'male' : 'Him/he',
    'female' : 'Her/She',
    'trans' :'They/them'
  };

  changeGender(gender:string)
  {
    this.gender= gender;
  }
}
