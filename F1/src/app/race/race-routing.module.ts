import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRacesComponent } from './all-races/all-races.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
    {
        path: 'races',
        component: AllRacesComponent
    },
    {
        path: 'races/:id',
        component: RaceComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule { }
