import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';

export class Product {
  image: string = ""
  title: string = ""
  amount: number = 0
  price: number = 0
  summary: number = 0
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})

export class ShoppingCartComponent implements OnInit {

  public products: Product[] = []
  public summary: number = 0

  ngOnInit() {
      for (let i = 0; i < 5; i++) {
        this.products.push({
          image: "https://vozduh.by/image/cache/catalog/zoomos/838319-228x228.jpg",
          title: "Daikin FTXZ25N/RXZ25N",
          amount: 2,
          price: 10010,
          summary: 20020
        })
        this.summary += 20020
      }
  }

}
