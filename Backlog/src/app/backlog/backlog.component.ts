import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
    selector: 'app-backlog',
    templateUrl: './backlog.component.html',
    styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
    backlog: Game[];


    constructor() {
        this.backlog = [];
    }

    ngOnInit(): void {
        this.backlog = this.getBacklog();
    }

    private getBacklog(): Game[] {

        let temp: Game[] = [{
            Title: "Bayonetta",
            Developer: "Platinum Games"
        }, {
            Title: "Xenoblade Chronicles 3",
            Developer: "Monolith Soft"
        }];
        return temp;
    }
}
