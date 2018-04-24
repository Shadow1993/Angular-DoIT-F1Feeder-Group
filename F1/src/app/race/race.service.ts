import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RaceService {

    constructor(private _http: HttpClient) { }

    getAllRaces(): Observable<any> {
        return this._http.get<any>(`http://ergast.com/api/f1/2013/results/1.json`)
            .map(data => data.MRData.RaceTable.Races)
            .do(allRaces => allRaces)
            .catch(error => <any>new Error(error))
    }
}
