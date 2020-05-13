import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { Observable } from 'rxjs';
import { tap, debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  time: string;
  // time$: Observable<string>;
  constructor(private service: HelperService) { }

  ngOnInit(): void {
    // this.time$ =
    this.service.getTheTime().pipe(
      map(t => `The Time is ${t}`),
      // tap(t => console.log(t)),
      tap(t => this.time = t)
    ).subscribe();
  }
}
