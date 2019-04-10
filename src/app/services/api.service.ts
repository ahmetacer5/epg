import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpgModel } from '../models/epg-model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Deserialize } from '../helpers/deserialize';
import { ProgramModel } from '../models/program-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  GetEpgData(): Observable<EpgModel> {
    return this.http.get(environment.apiUrl + 'epg')
      .pipe(
        map(response => Deserialize.toEpgModel(response))
      );
  }

  GetDemoProgramCatchUpDetails(): Observable<ProgramModel> {
    return this.http.get(environment.apiUrl + 'program/program_catchup_id')
      .pipe(
        map(response => Deserialize.toProgramModel(response))
      );
  }

  GetDemoProgramLiveDetails(): Observable<ProgramModel> {
    return this.http.get(environment.apiUrl + 'program/program_live_id')
      .pipe(
        map(response => Deserialize.toProgramModel(response))
      );
  }

  GetDemoProgramFutureDetails(): Observable<ProgramModel> {
    return this.http.get(environment.apiUrl + 'program/dummy_program_id')
      .pipe(
        map(response => Deserialize.toProgramModel(response))
      );
  }
}
