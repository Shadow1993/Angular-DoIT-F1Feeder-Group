import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RaceService } from '../../race.service';

@Injectable()
export class RaceResolverService implements Resolve<any> {

    constructor(private _raceService: RaceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id: number = +route.paramMap.get('id');
        return this._raceService.getRace(id);
    }

}
