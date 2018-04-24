import { Component, OnInit } from '@angular/core';
import { RaceService } from "../race.service";

@Component({
    selector: 'app-all-races',
    templateUrl: './all-races.component.html',
    styleUrls: ['./all-races.component.css']
})
export class AllRacesComponent implements OnInit {

    public allRaces;

    constructor(private _raceService: RaceService) { }

    ngOnInit() {
        this._raceService.getAllRaces()
            .subscribe(
                allRaces => {
                    console.log(allRaces);
                    this.allRaces = allRaces;
                },
                error => console.error(error)
            );
    }

}
