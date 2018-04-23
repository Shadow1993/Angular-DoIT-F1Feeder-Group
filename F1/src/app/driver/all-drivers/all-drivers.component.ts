import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css'],
  providers:[DriverService]
})
export class AllDriversComponent implements OnInit {

  constructor(private _DriverService: DriverService) {
    
   }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this._DriverService.getAllDrivers(2013);
  }

}
