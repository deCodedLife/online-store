import { Component, OnInit } from '@angular/core';

export class Card {
  id: number = 0
  image: string = ""
  title: string = ""
  description: string = ""
  price: number = 0
  isStock: boolean = false
}

@Component({
  selector: 'app-conditioners',
  templateUrl: './conditioners.component.html',
  styleUrls: ['./conditioners.component.less']
})
export class ConditionersComponent implements OnInit {

  public products: Card[] = []
  public pagesCount = 0
  public currentPage = 0

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 15; i++)
    {
      this.products.push({
        id: i,
        title: "Daikin FTXZ25N/RXZ25N",
        image: "https://vozduh.by/image/cache/catalog/zoomos/838319-228x228.jpg",
        description: "Основные характеристики: Тип: сплит-система Тип внутреннего блока: настенный Режимы работы: обогрев, охлаждение Дата выхода на рынок: 2015",
        price: 10010,
        isStock: true
      });
    }
  }

}
