import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    navigateForward(roomNumber: number) {
        this.router.navigate(['/detail/' + roomNumber + "/" + "3"]);
    }
}
