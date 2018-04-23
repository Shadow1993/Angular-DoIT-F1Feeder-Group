import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DriverService {

    constructor(private _http: Http) {}
    
    getAllDrivers(year: number) {
        return this._http.get(`http://ergast.com/api/f1/${year}/driverStandings.json`)
        .map((res: Response)=>res.json());
    }
}