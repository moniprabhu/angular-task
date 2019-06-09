import { Component, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  @Output() public grandChild= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.grandChild.emit(value);

}

}


