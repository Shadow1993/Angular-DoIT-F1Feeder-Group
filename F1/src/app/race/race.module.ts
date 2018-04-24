import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { RaceComponent } from './race/race.component';
import { AllRacesComponent } from './all-races/all-races.component';
import { RaceService } from './race.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RaceRoutingModule,
    HttpClientModule
  ],
  declarations: [RaceComponent, AllRacesComponent],
  providers: [RaceService]
})
export class RaceModule { }
