import {Component, Input, OnInit} from '@angular/core';
import {Banner} from '../home/home.component';

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
    link: "/"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
