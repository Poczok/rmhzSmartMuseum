import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class LandingPageComponent implements OnInit {

    constructor(public translate: TranslateService, public router: Router) { }

    ngOnInit(): void {
    }

    public setLanguage(language: string) {
        console.log(language)
        this.translate.use(language);
        this.router.navigate(['/welcome']);
    }
}
