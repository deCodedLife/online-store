import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.less']
})
export class TopHeaderComponent {

  public cartProductsCount: number = 5
}
