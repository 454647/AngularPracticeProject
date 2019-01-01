import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;

  @Output() OnChange = new EventEmitter<string>();
//emitter can be declared as void or undefined
  public message = 'value';

  constructor() {
  }

  ngOnInit() {
  }

  child_changed() {
    console.log(this.message);
    this.OnChange.emit(this.message);
    //emit can be of type void or undefined they both result in same emit(void) emit(undefined) emit()
  }

}
