import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private timeSubject: BehaviorSubject<string>;

  constructor() {
    this.timeSubject = new BehaviorSubject<string>(new Date().toLocaleTimeString());
    setInterval(() => {
      this.timeSubject.next(new Date().toLocaleTimeString());
    }, 900);
  }
  formatName(first: string, last: string) {
    return `${last}, ${first}`;
  }

  getTheTime(): Observable<string> {
    return this.timeSubject.asObservable();
  }
}
// type some
