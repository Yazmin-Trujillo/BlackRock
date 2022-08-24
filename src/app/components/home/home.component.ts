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

  constructor(public productsService: ProdutsService) { }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

}
