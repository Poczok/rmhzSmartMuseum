import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TestComponent } from './test/test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ExitPageComponent } from './exit-page/exit-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'list', component: TestComponent },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'main', component: MainMenuComponent },
    { path: 'detail/:roomId', component: TestComponent },
    { path: 'end', component: ExitPageComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
