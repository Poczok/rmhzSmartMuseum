import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    constructor(public router: Router, private translate: TranslateService) { }

    ngOnInit(): void {
        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
    }

    navigateForward() {
        this.router.navigate(['/main']);
    }

    navigateToLanding() {
        this.router.navigate(['/']);
    }

    returnUrlBasedOnLanguage() {
        return "../../assets/img/logo-short-" + this.translate.currentLang + ".svg"
    }
}
