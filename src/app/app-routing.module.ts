import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering_PAGE/catering_page.component';
import { FranchisingComponent } from './franchising_PAGE/franchising_page.component';
import { LocationComponent } from './location_PAGE/location.component';
import { MainPageComponent } from './main_PAGE/main_page.component';
import { SocialPageComponent } from './social_PAGE/social_page.component';

const routes: Routes = [
  {
    path: 'Menu',
    component: MainPageComponent,
  },
  {
    path: 'Location',
    component: LocationComponent,
  },
  {
    path: 'Catering',
    component: CateringComponent,
  },
  {
    path: '',
    redirectTo: '/Menu',
    pathMatch: 'full',
  },
  { path: 'Social', component: SocialPageComponent },
  { path: 'Franchising', component: FranchisingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
