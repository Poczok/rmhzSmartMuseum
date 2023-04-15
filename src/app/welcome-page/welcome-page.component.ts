import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    welcomeAudio = new Audio();

    constructor(public router: Router, private translate: TranslateService) { }

    ngOnInit(): void {
        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
        this.welcomeAudio.src= "../../assets/0-0-" + this.translate.currentLang + ".mp3";
        this.welcomeAudio.play();
    }

    navigateForward() {
        this.router.navigate(['/main']);
        this.welcomeAudio.pause()
    }

    navigateToLanding() {
        this.router.navigate(['/']);
        this.welcomeAudio.pause()
    }

    returnUrlBasedOnLanguage() {
        return "../../assets/img/logo-short-" + this.translate.currentLang + ".svg"
    }
}
