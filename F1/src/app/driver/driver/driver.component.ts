import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public id: string;
  driverDetail = {
    givenName:  ''
  };
  driverRaces;
  
  constructor(private _route: ActivatedRoute, private _DriverService: DriverService) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this._DriverService.getDetails(this.id).subscribe(data => {
      this.driverDetail = data;
      // console.log(data);
    });

    this._DriverService.getRaces(this.id).subscribe(data => {
      this.driverRaces = data.Races;
      console.log(data);
    });
  }

}
