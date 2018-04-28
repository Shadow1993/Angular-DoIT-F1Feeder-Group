import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.scss'],
  providers:[DriverService]
})
export class AllDriversComponent implements OnInit {
  driversArr;

  constructor(private _DriverService: DriverService) {
    
   }

  ngOnInit() {
    this._DriverService.getAllDrivers().subscribe(data => {
      this.driversArr = data;
      console.log(this.driversArr);
    });
  }

}
