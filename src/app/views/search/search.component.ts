import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  name: string = '';
  title: string = 'Search results';
  link: string = '/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
  ) {
    activatedRoute.params.subscribe((params) => (this.name = params['name']));
  }

  get products(): Product[] {
    console.log(this.name);
    return this.shopService.products.filter((all) =>
      all.title.includes(this.name),
    );
  }
}
