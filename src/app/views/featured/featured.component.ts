import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent {
  featuredTitle: string = 'Featured Products';
  featuredLink: string = '/featured';

  constructor(private shopService: ShopService) { }

  get featuredProducts(): Product[] {
    return this.shopService.products;
  }
}
