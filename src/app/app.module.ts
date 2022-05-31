import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    MainBodyComponent,
    SliderComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
