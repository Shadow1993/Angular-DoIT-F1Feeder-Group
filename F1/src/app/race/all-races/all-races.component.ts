import { Component, OnInit } from '@angular/core';
import { RaceService } from '../_service.race/race.service';

@Component({
    selector: 'app-all-races',
    templateUrl: './all-races.component.html',
    styleUrls: ['./all-races.component.css']
})
export class AllRacesComponent implements OnInit {

    public allRaces;
    public filteredRaces;

    private _filter: string;

    get filter() {
        return this._filter;
    }
    set filter(val: string) {
        this._filter = val;
        this.filteredRaces = this._filter ? this.filterRaces(this._filter) : this.allRaces;
    }

    constructor(private _raceService: RaceService, ) { }

    ngOnInit() {
        this._raceService.getAllRaces()
            .subscribe(
                allRaces => {
                    console.log(allRaces);
                    this.allRaces = allRaces;
                    this.filteredRaces = this.allRaces;
                },
                error => console.error(error)
            );
    }

    filterRaces(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allRaces.filter((race) => {
            return race.raceName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }

}
