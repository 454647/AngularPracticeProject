import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {EditComponent} from './parent/edit/edit.component';
import {ListComponent} from './parent/list/list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoute: Routes = [
  {path: '', component: ParentComponent , children: [
  {path: 'edit/:id/:name', component: EditComponent}
    ]},
  // {path: 'edit/:id/:name', component: EditComponent},
  {path: 'list', component: ListComponent},
  {path: 'child', component: ChildComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
