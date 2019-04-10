import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateSelectorServiceService {
  static selectedDate: Subject<Date> = new Subject<Date>();

  static SetDate(date: Date) {
    this.selectedDate.next(date);
  }

  static GetObservable(): Observable<Date> {
    return this.selectedDate.asObservable();
  }

}
