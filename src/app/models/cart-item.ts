import { Product } from './product';

export class CartItem {
  public product: Product;
  public amount: number = 1;

  constructor(product: Product) {
    this.product = product;
  }
}
