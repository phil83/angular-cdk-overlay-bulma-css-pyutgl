import { Component } from '@angular/core';
import { DynamicDialogConfig } from './dynamic-dialog/dynamic-dialog.config';
import { DynamicDialogService } from './dynamic-dialog/dynamic-dialog.service';
import {TestDialogComponent} from './components/test-dialog/test-dialog.component';
import { HEROES } from './mock-heroes'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  heroes = HEROES;

  constructor() {
  }


}
