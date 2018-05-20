import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TeamService } from '../../team.service';

@Injectable()
export class TeamResolverService implements Resolve<any> {

    constructor(private _teamService: TeamService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id: number = +route.paramMap.get('id');
        return this._teamService.getTeam(id);
    }

}
