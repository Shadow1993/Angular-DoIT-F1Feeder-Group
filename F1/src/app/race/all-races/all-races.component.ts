import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-all-races',
    templateUrl: './all-races.component.html',
    styleUrls: ['./all-races.component.scss']
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

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.data
            .subscribe(data => {
                this.allRaces = data.allRaces;
                this.filteredRaces = this.allRaces;
            });
    }

    filterRaces(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allRaces.filter((race) => {
            return race.raceName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }

}
