import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainPageComponent } from './main_PAGE/main_page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoodsComponent } from './goods/goods.component';
import { LimitedComponent } from './limited/limited.component';
import { FooterComponent } from './footer/footer.component';
import { LocationPlacesComponent } from './location-places/location-places.component';
import { LocationComponent } from './location_PAGE/location.component';
import { CateringComponent } from './catering_PAGE/catering_page.component';
import { CateringFormComponent } from './catering-form/catering-form.component';
import { SocialPageComponent } from './social_PAGE/social_page.component';
import { SocialSliderComponent } from './social-slider/social-slider.component';
import { FranchisingComponent } from './franchising_PAGE/franchising_page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MainPageComponent,
    NavBarComponent,
    GoodsComponent,
    LimitedComponent,
    FooterComponent,
    LocationPlacesComponent,
    LocationComponent,
    CateringComponent,
    CateringFormComponent,
    SocialPageComponent,
    SocialSliderComponent,
    FranchisingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
