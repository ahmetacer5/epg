import { Component, Input, OnInit } from '@angular/core';
import { ProgramModel } from '../../models/program-model';
import { SeriesModel } from '../../models/series-model';

@Component({
  selector: 'app-program-series',
  templateUrl: './program-series.component.html',
  styleUrls: ['./program-series.component.scss']
})
export class ProgramSeriesComponent implements OnInit {
  @Input() program: ProgramModel;
  selectedSeries: SeriesModel;

  constructor() {
  }

  ngOnInit() {
  }

}
