import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { tap, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  time: string;
  time$: Observable<string>;
  constructor(private service: HelperService) { }
  ngOnInit(): void {
    this.time$ = this.service.getTheTime();
    this.subscription = this.service.getTheTime().pipe(
      tap(time => console.log(`The status component got ${time}`)),
      tap(time => this.time = time),
      distinctUntilChanged()
    ).subscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
