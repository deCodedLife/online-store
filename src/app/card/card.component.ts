import { Input, Component, OnInit } from '@angular/core';
import { Card } from "../conditioners/conditioners.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})

export class CardComponent {
  @Input() content: Card = {
    title: "",
    description: "",
    image: "",
    id: 0,
    price: 0,
    isStock: true
  }
}
