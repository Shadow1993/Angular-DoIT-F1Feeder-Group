import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';

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

    constructor(private _route: ActivatedRoute, private _raceService: RaceService) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = +params['id'];
            this._raceService.getQualifier(this.id)
                .subscribe(qualifier => {
                    if (qualifier.QualifyingResults) {
                        this.qualifier = qualifier.QualifyingResults;
                        this.track = {
                            raceName: qualifier.raceName,
                            country: qualifier.Circuit.Location.country,
                            location: qualifier.Circuit.Location.locality,
                            date: qualifier.date,
                            url: qualifier.Circuit.url,
                        };
                    }
                    console.log(qualifier);
                });
            this._raceService.getRace(this.id)
                .subscribe(race => {
                    if (race.Results) {
                        this.race = race.Results;
                    }
                    console.log(race);
                });
        });
    }

}
