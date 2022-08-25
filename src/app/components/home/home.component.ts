import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProdutsService } from '../../services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions;
  userProducts: Product[] = []
  // display: boolean = false;

  constructor(public productsService: ProdutsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => {
        this.products = products,
          this.userProducts = [products[1],products[2],products[3]]
      }

      );
  }

}
