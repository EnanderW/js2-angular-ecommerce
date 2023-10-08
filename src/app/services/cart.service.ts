import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items: CartItem[];
  public showCart = new Subject<boolean>();

  constructor(private storageService: StorageService) {
    this._items = storageService.loadCart();
  }

  public get items(): CartItem[] {
    return this._items;
  }

  public addItem(product: Product): void {
    if (this.isInCart(product.id)) {
      this.addAmount(product.id);
    } else {
      this._items.push(new CartItem(product));
      this.storageService.saveCart(this._items);
    }
  }

  public removeItem(productId: number): void {
    this._items = this._items.filter((all) => all.product.id !== productId);
    this.storageService.saveCart(this._items);
  }

  public addAmount(productId: number): void {
    for (let item of this._items) {
      if (item.product.id === productId) {
        item.amount++;
      }
    }

    this.storageService.saveCart(this._items);
  }

  public reduceAmount(productId: number): void {
    for (let item of this._items) {
      if (item.product.id === productId) {
        item.amount--;

        if (item.amount <= 0) {
          this.removeItem(productId);
          return;
        }
      }
    }

    this.storageService.saveCart(this._items);
  }

  public isInCart(productId: number): boolean {
    for (let item of this._items) {
      if (item.product.id === productId) {
        return true;
      }
    }

    return false;
  }

  public getCartAmount(): number {
    return this.items.length;
  }
}
