import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRacesComponent } from './all-races/all-races.component';
import { RaceComponent } from './race/race.component';
import { AllRacesResolverService } from './_service.race/resolvers/all-races/all-races-resolver.service';
import { QualifierResolverService } from './_service.race/resolvers/qualifier/qualifier-resolver.service';
import { RaceResolverService } from './_service.race/resolvers/race/race-resolver.service';

const routes: Routes = [
    {
        path: 'races',
        component: AllRacesComponent,
        resolve: {
            allRaces: AllRacesResolverService
        }
    },
    {
        path: 'races/:id',
        component: RaceComponent,
        resolve: {
            race: RaceResolverService,
            qualifier: QualifierResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AllRacesResolverService, QualifierResolverService, RaceResolverService]
})
export class RaceRoutingModule { }
