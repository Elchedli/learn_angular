import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'E-Commerce';
  priceMax!: number;
  listProduct!: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct = [
      { id: 1, title: 'T-shirt 1', price: 20, quantity: 10, like: 0 },
      { id: 1, title: 'T-shirt 2', price: 20, quantity: 0, like: 0 },
      { id: 1, title: 'T-shirt 3', price: 120, quantity: 2, like: 0 },
    ]
  }
  incrementLike(i: number) {
    this.listProduct[i].like++;
  }

}
