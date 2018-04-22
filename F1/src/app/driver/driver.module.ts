import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
  imports: [
    CommonModule,
    DriverRoutingModule
  ],
  declarations: [AllDriversComponent, DriverComponent]
})
export class DriverModule { }
