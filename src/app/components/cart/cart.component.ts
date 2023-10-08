import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  modalClasses: Record<string, boolean> = {
    show: false,
    hide: true,
  };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.showCart.subscribe((value) => {
      if (value) {
        this.modalClasses['show'] = true;
        this.modalClasses['hide'] = false;
      } else {
        this.modalClasses['show'] = false;
        this.modalClasses['hide'] = true;
      }
    });
  }

  get items(): CartItem[] {
    return this.cartService.items;
  }

  closeCart(): void {
    this.cartService.showCart.next(false);
  }

  addAmount(item: CartItem): void {
    this.cartService.addAmount(item.product.id);
  }

  reduceAmount(item: CartItem): void {
    this.cartService.reduceAmount(item.product.id);
  }
}
