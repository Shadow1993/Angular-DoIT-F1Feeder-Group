import { Injectable } from '@angular/core';
import { RaceService } from '../../race.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AllRacesResolverService implements Resolve<any> {

    constructor(private _raceService: RaceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._raceService.getAllRaces();
    }
}
