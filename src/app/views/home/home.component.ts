import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  featuredTitle: string = 'Featured Products';
  recommendedTitle: string = 'Recommended Products';
  featuredLink: string = '/featured';
  recommendedLink: string = '/recommended';

  constructor(private shopService: ShopService) { }

  get featuredProducts(): Product[] {
    return this.shopService.products;
  }

  get recommendedProducts(): Product[] {
    return this.shopService.products;
  }
}
