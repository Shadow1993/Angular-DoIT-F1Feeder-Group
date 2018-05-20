import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { TeamComponent } from './team/team.component';
import { AllTeamsResolverService } from './_service.team/resolvers/all-teams/all-teams-resolver.service';
import { TeamResolverService } from './_service.team/resolvers/team/team-resolver.service';
import { TeamRacesResolverService } from './_service.team/resolvers/team-races/team-races-resolver.service';

const routes: Routes = [
    {
        path: 'teams',
        component: AllTeamsComponent,
        resolve: {
            allTeams: AllTeamsResolverService
        }
    },
    {
        path: 'teams/:id',
        component: TeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AllTeamsResolverService, TeamResolverService, TeamRacesResolverService]
})
export class TeamRoutingModule { }
