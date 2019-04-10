import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ScheduleModel } from '../models/schedule-model';
import * as moment from 'moment';
import { Units } from '../helpers/units';


@Directive({
  selector: '[appBlockResizer]'
})
export class BlockResizerDirective implements OnInit {
  @Input() appBlockResizer: ScheduleModel;

  constructor(private el: ElementRef) {
  }

  setBlockLocationAndWidth(left: string, width: string) {
    this.el.nativeElement.style.left = left;
    this.el.nativeElement.style.width = width;
  }

  isItLiveNow() {
    const now = new Date();
    const programStartInMinute = (this.appBlockResizer.StartDate.getHours() * 60) + this.appBlockResizer.StartDate.getMinutes();
    const programEndInMinute = (this.appBlockResizer.EndDate.getHours() * 60) + this.appBlockResizer.EndDate.getMinutes();
    const currentTimeInMinute = (now.getHours() * 60) + now.getMinutes();

    return (programEndInMinute > currentTimeInMinute && currentTimeInMinute > programStartInMinute);
  }

  ngOnInit() {
    const totalMinutes = moment(this.appBlockResizer.EndDate).diff(moment(this.appBlockResizer.StartDate), 'minutes');
    const programStartInMinute = (this.appBlockResizer.StartDate.getHours() * 60) + this.appBlockResizer.StartDate.getMinutes();
    const blockLeft = (Units.zeroPointPixel + Units.convertMinuteToPixel(programStartInMinute)) + 'px';
    const blockWidth = Units.convertMinuteToPixel(totalMinutes) + 'px';
    this.setBlockLocationAndWidth(blockLeft, blockWidth);
    this.el.nativeElement.style['background-color'] = (this.isItLiveNow() ? '#393939' : '#111111');
  }
}
