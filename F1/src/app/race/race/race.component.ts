import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../_service.race/race.service';

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

    public id: number;

    public qualifier;
    public race;
    public track: object = {};

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.data.subscribe(data => {
            this.qualifier = data.qualifier.QualifyingResults;
            this.race = data.race.Results;
            this.track = {
                raceName: data.qualifier.raceName,
                country: data.qualifier.Circuit.Location.country,
                location: data.qualifier.Circuit.Location.locality,
                date: data.qualifier.date,
                url: data.qualifier.Circuit.url,
            };
        });
    }

}
