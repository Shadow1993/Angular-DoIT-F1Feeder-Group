import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team/team.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from './_service.team/team.service';

@NgModule({
    imports: [
        CommonModule,
        TeamRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [TeamComponent, AllTeamsComponent],
    providers: [TeamService]
})
export class TeamModule { }
