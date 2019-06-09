import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `<h2>{{"hello"+parentdata}}</h2>`,
  styleUrls: []
})
export class Component2Component implements OnInit {
@Input() public parentdata;
  constructor() { }

  ngOnInit() {
  }

}
