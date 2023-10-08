import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() { }

  public saveCart(items: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  public loadCart(): CartItem[] {
    let cartJson = localStorage.getItem('cart');
    return !cartJson ? [] : JSON.parse(cartJson);
  }
}
