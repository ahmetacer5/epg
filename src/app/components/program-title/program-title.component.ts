import { Component, Input, OnInit } from '@angular/core';
import { ProgramModel } from '../../models/program-model';

@Component({
  selector: 'app-program-title',
  templateUrl: './program-title.component.html',
  styleUrls: ['./program-title.component.scss']
})
export class ProgramTitleComponent implements OnInit {
  @Input() program: ProgramModel;

  constructor() {
  }

  ngOnInit() {
  }

}
