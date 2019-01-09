import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  private param: { id: number, name: string };

  constructor(public route: ActivatedRoute) {
  }

  public paramSubscriber: Subscription;

  ngOnInit() {
    this.param = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramSubscriber = this.route.params.subscribe((change: Params) => {
       this.param.id = change['id'];
      this.param.name = change['name'];

    });

  }

  ngOnDestroy(): void {
    this.paramSubscriber.unsubscribe();
  }

}
