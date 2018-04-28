import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DriverService {

    constructor(private _http: Http) {}
    
    getAllDrivers(): Observable<any> {
        return this._http.get('http://ergast.com/api/f1/2013/driverStandings.json')
            .map((res: Response) => res.json().MRData.StandingsTable.StandingsLists[0].DriverStandings);
    }

    getDetails(id): Observable<any>{
        return this._http.get(`http://ergast.com/api/f1/2013/drivers/${id}/driverStandings.json`)
            .map((res: Response) => res.json().MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver);
    }

    getRaces(id): Observable<any>{
        return this._http.get(`http://ergast.com/api/f1/2013/drivers/${id}/results.json`)
            .map((res: Response) => res.json().MRData.RaceTable);
    }
}