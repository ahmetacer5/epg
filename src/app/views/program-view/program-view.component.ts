import { Component, OnInit } from '@angular/core';
import { ProgramModel } from '../../models/program-model';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.scss']
})
export class ProgramViewComponent implements OnInit {
  program: Observable<ProgramModel>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.program = this.api.GetDemoProgramLiveDetails();
  }

}
