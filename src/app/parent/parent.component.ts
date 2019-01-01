import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  public message: string = 'Not overriden';

  constructor() {
  }

  public parentMessage: string = 'Parent Ccmponet Message sent to Input';

  ngOnInit() {
  }

  messageReceiver(data: string) {
    console.log(data);
    this.message = data;
  }


}
