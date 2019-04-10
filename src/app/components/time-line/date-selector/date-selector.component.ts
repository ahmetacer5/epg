import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DateSelectorServiceService } from '../../../services/date-selector-service.service';
import { Subscription } from 'rxjs';
import { Units } from '../../../helpers/units';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit, OnDestroy, AfterViewInit {
  dummyDates = [];
  selectedDate: Date;
  dateSelectorSubscription: Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnDestroy() {
    if (this.dateSelectorSubscription) {
      this.dateSelectorSubscription.unsubscribe();
    }

  }

  ngAfterViewInit() {
    DateSelectorServiceService.SetDate(new Date(2019, 3, 6)); // There is data on this date, used it for demo pur
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    for (let i = 0 ; i < 100 ; i++) {
      const now = new Date(2019, 3, 1);
      now.setHours(now.getHours() + (i * 24));
      this.dummyDates.push(now);
    }
    this.dateSelectorSubscription = DateSelectorServiceService.GetObservable().subscribe(date => this.scrollToSelectedItem(date));
  }

  selectDate(date: Date) {
    DateSelectorServiceService.SetDate(date);
  }

  scrollToSelectedItem(date: Date) {
    const index = this.dummyDates.findIndex((e: Date) => e.getTime() === date.getTime());
    const selectedItemId = 'date-select-item-' + index;
    this.selectedDate = this.dummyDates[index];
    const container = document.getElementById('dates-wrapper');
    const selectedItemElement = document.getElementById(selectedItemId);
    const selectedItemOfset = selectedItemElement.offsetLeft - container.clientWidth / 2 - selectedItemElement.clientWidth / 2;
    Units.scrollTo(container, selectedItemOfset, 250);
  }
}
