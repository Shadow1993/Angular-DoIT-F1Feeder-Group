import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    public races;
    public team;

    public racer1;
    public racer2;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.data.subscribe(data => {
            this.team = data.team;
            this.races = data.teamRaces;
            this.racer1 = data.teamRaces[0].Results[0].Driver.familyName;
            this.racer2 = data.teamRaces[0].Results[1].Driver.familyName;
        });
    }

    getPoints(a: number, b: number): number {
        const x = Number(a);
        const y = Number(b);
        return x + y;
    }
}
