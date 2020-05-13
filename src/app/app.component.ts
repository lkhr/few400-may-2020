import { Component } from '@angular/core';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(service: HelperService) {
    console.log(service.formatName('Alexander', 'Hamilton'));
  }
  title = 'few400';
  footer = 'This is the footer';
  doIt() {
    this.footer = 'Jeff Was Here';
  }

  myKidWantsSomething(what: string) {
    console.log(what);
  }
}
