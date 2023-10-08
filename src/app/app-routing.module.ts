import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FeaturedComponent } from './views/featured/featured.component';
import { RecommendedComponent } from './views/recommended/recommended.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'search/:name', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
