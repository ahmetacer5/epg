import { Component, Input, OnInit } from '@angular/core';
import { ChannelModel } from '../../../models/channel-model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: ChannelModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
