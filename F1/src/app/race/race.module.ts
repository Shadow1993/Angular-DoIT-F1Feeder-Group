import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { RaceComponent } from './race/race.component';
import { AllRacesComponent } from './all-races/all-races.component';

@NgModule({
  imports: [
    CommonModule,
    RaceRoutingModule
  ],
  declarations: [RaceComponent, AllRacesComponent]
})
export class RaceModule { }
