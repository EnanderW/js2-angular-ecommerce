import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedComponent } from './views/featured/featured.component';
import { RecommendedComponent } from './views/recommended/recommended.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './views/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductItemComponent,
    FeaturedComponent,
    RecommendedComponent,
    HeaderComponent,
    NavComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
