import {Component, Input, OnInit} from '@angular/core';
import {Banner} from '../home/home.component';
import { Category } from "../category/category.component";

@Component({
  selector: 'app-baner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {

  @Input() content: Banner = {
    id: 0,
    title: "Test",
    subtitle: "Test",
    image: "https://coded.life/favicon.ico",
    color: "#119da4",
    link: "/",
    categories: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
