import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EpgModel } from '../../models/epg-model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  epgData: EpgModel;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.GetEpgData().subscribe(e => {
      this.epgData = e;
    });
  }

}
