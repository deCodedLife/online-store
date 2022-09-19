import { Component, Input, OnInit } from '@angular/core';
import { MiniCard } from "../home/home.component";

@Component({
  selector: 'app-min-card',
  templateUrl: './min-card.component.html',
  styleUrls: ['./min-card.component.less']
})
export class MinCardComponent implements OnInit {

  @Input() content: MiniCard = {
    id: 0,
    price: 0,
    image: "",
    title: "",
    link: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
