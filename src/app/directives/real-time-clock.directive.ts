import { Directive, ElementRef, OnInit } from '@angular/core';
import { Units } from '../helpers/units';

@Directive({
  selector: '[appRealTimeClock]'
})
export class RealTimeClockDirective implements OnInit {
  marginLeft = 140;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.rePosition();
    setInterval(() => {
      this.rePosition();
    }, 30000); // update every 30 seconds.
  }

  rePosition() {
    const now = new Date();
    const currentTimeInMinute = (now.getHours() * 60) + now.getMinutes();
    const currentTimeInPixel = Units.convertMinuteToPixel(currentTimeInMinute);
    this.el.nativeElement.firstChild.style.left = this.marginLeft + (currentTimeInPixel - 1) + 'px';
    this.el.nativeElement.lastChild.style.left = this.marginLeft + currentTimeInPixel + 'px';
  }
}
