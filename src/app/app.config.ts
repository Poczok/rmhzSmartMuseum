import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ExitPageComponent } from './exit-page/exit-page.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes = [
    { path: '', component: LandingPageComponent },
    { path: 'list', component: RoomDetailComponent },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'main', component: MainMenuComponent },
    { path: 'detail/:roomId', component: RoomDetailComponent },
    { path: 'end', component: ExitPageComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
