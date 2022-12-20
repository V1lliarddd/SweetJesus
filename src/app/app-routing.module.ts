import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CateringComponent } from './catering_PAGE/catering_page.component';
import { GoodsComponent } from './goods/goods.component';
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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
