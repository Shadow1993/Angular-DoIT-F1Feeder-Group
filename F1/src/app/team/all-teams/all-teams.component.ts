import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-all-teams',
    templateUrl: './all-teams.component.html',
    styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

    public allTeams;
    public filteredTeams;

    private _filter: string;

    get filter() {
        return this._filter;
    }
    set filter(val: string) {
        this._filter = val;
        this.filteredTeams = this._filter ? this.filterTeams(this._filter) : this.allTeams;
    }

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.data
            .subscribe(data => {
                this.allTeams = data.allTeams;
                this.filteredTeams = this.allTeams;
            });
    }

    filterTeams(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allTeams.filter((team) => {
            return team.Constructor.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });

    }
}
