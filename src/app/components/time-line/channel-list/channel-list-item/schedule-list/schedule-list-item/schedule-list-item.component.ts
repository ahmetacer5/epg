import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ScheduleModel } from '../../../../../../models/schedule-model';

@Component({
  selector: 'app-schedule-list-item',
  templateUrl: './schedule-list-item.component.html',
  styleUrls: ['./schedule-list-item.component.scss']
})
export class ScheduleListItemComponent implements OnInit {
  @Input() schedule: ScheduleModel;

  constructor() {
  }

  ngOnInit() {
  }
}
