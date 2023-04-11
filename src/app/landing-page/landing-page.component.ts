import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public translate: TranslateService, public router: Router) { }

  ngOnInit(): void {
  }

  public setLanguage(language: string) {
    this.translate.use(language);
    console.log('navv');
    this.router.navigate(['/welcome']);
  }
}
