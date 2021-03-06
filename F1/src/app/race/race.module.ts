import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { RaceComponent } from './race/race.component';
import { AllRacesComponent } from './all-races/all-races.component';
import { RaceService } from './_service.race/race.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RaceRoutingModule,
    HttpClientModule,
    FormsModule
],
  declarations: [RaceComponent, AllRacesComponent],
  providers: [RaceService]
})
export class RaceModule { }
