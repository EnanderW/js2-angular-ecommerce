import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent {
  recommendedTitle: string = 'Recommended Products';
  recommendedLink: string = '/recommended';

  constructor(private shopService: ShopService) { }

  get recommendedProducts(): Product[] {
    return this.shopService.products;
  }
}
