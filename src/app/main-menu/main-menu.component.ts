import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class MainMenuComponent implements OnInit {

    constructor(public router: Router, public translate: TranslateService) { }

    ngOnInit(): void {
        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
    }

    navigateForward(roomNumber: number) {
        this.router.navigate(['/detail/' + roomNumber]);
    }

    navigateToLanding() {
        this.router.navigate(['/']);
    }

    returnUrlBasedOnLanguage() {
        return "../../assets/img/logo-" + (this.translate.currentLang ? this.translate.currentLang : 'hu') + ".svg"
    }

    navigateToExit() {
        this.router.navigate(['/end']);
    }
}
