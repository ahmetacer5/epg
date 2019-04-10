import { Component, Input, OnInit } from '@angular/core';
import { ChannelModel } from '../../../../models/channel-model';

@Component({
  selector: 'app-channel-list-item',
  templateUrl: './channel-list-item.component.html',
  styleUrls: ['./channel-list-item.component.scss']
})
export class ChannelListItemComponent implements OnInit {
  @Input() channel: ChannelModel;

  constructor() {
  }

  ngOnInit() {
  }

}
