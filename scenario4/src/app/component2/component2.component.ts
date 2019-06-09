import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  template: `<input #myinput type="text">
  <button (click)="fireEvent(myinput.value)">sending data</button>`,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
 @Output() parentevent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
fireEvent(value){
  console.log(value);
  this.parentevent.emit(value);
}
}
