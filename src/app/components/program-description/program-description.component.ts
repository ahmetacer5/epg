import { Component, Input, OnInit } from '@angular/core';
import { ProgramModel } from '../../models/program-model';

@Component({
  selector: 'app-program-description',
  templateUrl: './program-description.component.html',
  styleUrls: ['./program-description.component.scss']
})
export class ProgramDescriptionComponent implements OnInit {
  @Input() program: ProgramModel;
  collapsed = true;

  constructor() {
  }

  ngOnInit() {
  }

}
