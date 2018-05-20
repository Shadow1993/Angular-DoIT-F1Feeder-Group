import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class TeamService {

    constructor(private _http: HttpClient) { }

    getAllTeams(): Observable<any> {
        return this._http.get<any>(`http://ergast.com/api/f1/2013/constructorStandings.json`)
            .map(data => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
            .catch(error => <any>new Error(error));
    }

    getRaces(id): Observable<any> {
        return this._http.get<any>(`http://ergast.com/api/f1/2013/constructors/${id}/results.json?limit=100&offset=0`)
            .map(data => data.MRData.RaceTable.Races)
            .catch(error => <any>new Error(error));
    }

    getTeam(id): Observable<any> {
        return this._http.get<any>(`http://ergast.com/api/f1/2013/constructors/${id}/constructorStandings.json`)
            .map(data => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0])
            .catch(error => <any>new Error(error));
    }
}
