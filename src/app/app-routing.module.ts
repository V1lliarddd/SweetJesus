import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering_PAGE/catering_page.component';
import { LocationComponent } from './location_PAGE/location.component';
import { MainPageComponent } from './main_PAGE/main_page.component';

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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
