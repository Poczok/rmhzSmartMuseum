import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-exit-page',
    templateUrl: './exit-page.component.html',
    styleUrls: ['./exit-page.component.css']
})
export class ExitPageComponent implements OnInit {

    constructor(public router: Router, public translate: TranslateService) { }

    ngOnInit(): void {
        if (this.translate.currentLang == undefined) {
            this.translate.use('hu');
        }
    }

    navigateToLanding() {
        this.router.navigate(['/']);
    }

    returnUrlBasedOnLanguage() {
        return "../../assets/img/logo-" + (this.translate.currentLang ? this.translate.currentLang : 'hu') + ".svg"
    }

}
