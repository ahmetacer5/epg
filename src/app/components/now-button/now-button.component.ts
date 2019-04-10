import { Component, OnInit } from '@angular/core';
import { Units } from '../../helpers/units';

@Component({
  selector: 'app-now-button',
  templateUrl: './now-button.component.html',
  styleUrls: ['./now-button.component.scss']
})
export class NowButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  goToCurrentTime() {
    const container = document.getElementById('schedule-wrapper') as HTMLElement;
    const now = new Date();
    const currentTimeInMinute = (now.getHours() * 60) + now.getMinutes();
    const currentTimeInPixel = Units.convertMinuteToPixel(currentTimeInMinute) - container.clientWidth / 2;
    Units.scrollTo(container, currentTimeInPixel, 300);
  }

}
