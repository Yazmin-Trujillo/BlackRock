import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProdutsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  @Input() product!: Product;

  products: Product[] = [];
  constructor(public productsService: ProdutsService) { }

  ngOnInit(): void {
    this.productsService
    .getProducts()
    .subscribe((products) => (this.products = products));
  }
}
