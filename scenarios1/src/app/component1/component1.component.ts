import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: ` <input #myinput type="text">
  <button (click)="onClick(myinput.value)"  >clickme</button>`,
  styleUrls: []
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value)
  }
  
}
