import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subfactory',
  templateUrl: './subfactory.component.html',
  styleUrls: ['./subfactory.component.css']
})
export class SubfactoryComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

  someFunction(textFromParent){
    this.text = textFromParent;
  }

}
