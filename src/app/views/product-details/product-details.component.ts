import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private cartService: CartService,
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }

  get product(): Product | undefined {
    return this.shopService.products.find((all) => all.id === this.id);
  }

  addToCart(): void {
    let product = this.product;
    if (!product) return;

    this.cartService.addItem(product);
  }

  removeFromCart(): void {
    this.cartService.removeItem(this.id);
  }

  isInCart(): boolean {
    return this.cartService.isInCart(this.id);
  }
}
