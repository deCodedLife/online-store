import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DropContent} from "../calcuator/calcuator.component";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent {

  @Input() title: string = ""
  @Input() content: DropContent[] = []

  @Output() sumChanged = new EventEmitter<number>();

  show() { this.isToggled = !this.isToggled }

  change( e: any, itemIndex: number ) {
    let totalPrice = 0
    this.content[ itemIndex ].count = e.target.value

    this.content.forEach( (item) => {
      let additionalPrice = item.additional.price === undefined ? 0 : item.additional.price
      totalPrice += (item.price + additionalPrice) * item.count
    })

    this.sumChanged.emit( totalPrice )
  }

  public count: number = 0
  public isToggled: boolean = false

}
