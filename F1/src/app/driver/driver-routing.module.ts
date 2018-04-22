import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
    {
        path: 'drivers',
        component: AllDriversComponent
    },
    {
        path: 'drivers/:id',
        component: DriverComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriverRoutingModule { }
