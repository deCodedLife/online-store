import {Component, Input, OnInit} from '@angular/core';
import { Card } from "../conditioners/conditioners.component";

export class Category {
  image: string = ""
  title: string = ""
  link: string = ""
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent {
  @Input() content: Category = {
    title: "",
    image: "",
    link: ""
  }
}
