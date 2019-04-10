import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixScheduleScrolling]'
})
export class FixScheduleScrollingDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = (document.getElementsByClassName('times-wrapper')[0].scrollWidth - 70) + 'px';
  }

}
