import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public products: Product[] = [];

  constructor() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => (this.products = res.products));
  }
}
