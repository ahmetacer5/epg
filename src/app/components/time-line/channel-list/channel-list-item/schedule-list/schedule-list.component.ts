import { Component, Input, OnInit } from '@angular/core';
import { ScheduleModel } from '../../../../../models/schedule-model';
import { Subscription } from 'rxjs';
import { DateSelectorServiceService } from '../../../../../services/date-selector-service.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  @Input() schedules: ScheduleModel[];
  filteredList: ScheduleModel[];
  selectedDate: Date;
  dateSelectorSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.dateSelectorSubscription = DateSelectorServiceService.GetObservable().subscribe(date => {
      this.selectedDate = date;
      setTimeout(() => this.applyFilter(), 0);
    });
  }

  filterByDate(e: ScheduleModel) {
    return (e.StartDate.getFullYear() === this.selectedDate.getFullYear() && e.StartDate.getMonth() === this.selectedDate.getMonth() && e.StartDate.getDate() === this.selectedDate.getDate());
  }

  sortByDate(a: ScheduleModel, b: ScheduleModel) {
    return (a.StartDate.getTime() - b.StartDate.getTime());
  }

  applyFilter() {
    this.filteredList = this.schedules
      .filter(e => this.filterByDate(e))
      .sort(this.sortByDate);
  }
}
