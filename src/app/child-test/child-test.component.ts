import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {

  constructor() { }

  @Input()
  message: string;

  @Input()
  myObject: Person;

  ngOnInit() {
    console.log(this.myObject)
  }

 

}
