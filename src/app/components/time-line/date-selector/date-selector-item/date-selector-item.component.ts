import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-selector-item',
  templateUrl: './date-selector-item.component.html',
  styleUrls: ['./date-selector-item.component.scss']
})
export class DateSelectorItemComponent implements OnInit {
  @Input() date: Date;
  @Input() isSelected = false;

  constructor() {
  }

  ngOnInit() {
  }
}
