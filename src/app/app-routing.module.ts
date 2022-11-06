import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: TestComponent},
  {path: 'list', component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
