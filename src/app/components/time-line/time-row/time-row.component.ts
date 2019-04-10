import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-row',
  templateUrl: './time-row.component.html',
  styleUrls: ['./time-row.component.scss']
})
export class TimeRowComponent implements OnInit {
  times = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0 ; i < 25 ; i++) {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      now.setHours(now.getHours() + i);
      this.times.push(now);
    }
  }

}
