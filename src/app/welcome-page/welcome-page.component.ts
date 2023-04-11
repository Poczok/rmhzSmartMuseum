import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    navigateForward() {
        this.router.navigate(['/main']);
    }

}
