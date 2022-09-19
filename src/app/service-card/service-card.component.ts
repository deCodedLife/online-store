import { Component, OnInit, Input } from '@angular/core';
import { Service } from "../services/services.component";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.less']
})

export class ServiceCardComponent {

  @Input() content: Service = {
    image: "",
    title: "",
    subTitle: "",
    link: ""
  }

}
