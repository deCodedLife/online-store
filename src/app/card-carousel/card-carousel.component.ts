import { Component, Input, OnInit } from '@angular/core';
import { MiniCard } from "../home/home.component";

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.less']
})
export class CardCarouselComponent implements OnInit {

  @Input() content: MiniCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
