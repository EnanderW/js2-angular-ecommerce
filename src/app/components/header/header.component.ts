import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private cartService: CartService,
    private router: Router,
  ) { }

  get cartAmount(): number {
    return this.cartService.getCartAmount();
  }

  toggleCart(): void {
    this.cartService.showCart.next(true);
  }

  doSearch(name: string): void {
    this.router.navigate(['/search', name]);
  }
}
