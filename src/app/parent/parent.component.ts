import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public data = [
    {'id': 1, 'name': 'xyz'},
    {'id': 2, 'name': 'qwe'},
    {'id': 3, 'name': 'etey'},
    {'id': 4, 'name': 'fghj'},
    {'id': 5, 'name': 'ppiqowe'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  editData(data) {
    this.router.navigate(['/edit', data.id, data.name]);
  }

}
