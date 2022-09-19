import {Component, Input } from '@angular/core';
import { Product } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent {
  @Input() content: Product = {
    image: "",
    title: "",
    amount: 0,
    price: 0,
    summary: 0
  }
}
