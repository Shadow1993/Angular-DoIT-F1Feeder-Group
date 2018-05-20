import { Injectable } from '@angular/core';
import { TeamService } from '../../team.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AllTeamsResolverService implements Resolve<any> {

    constructor(private _teamService: TeamService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._teamService.getAllTeams();
    }
}
