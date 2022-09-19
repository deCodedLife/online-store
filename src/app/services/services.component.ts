import { Component, OnInit } from '@angular/core';

export class Service {
  image: string = ""
  title: string = ""
  subTitle: string = ""
  link: string = ""
}


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent {

  public services: Service[] = [
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    },
    {
      image: "/assets/service.png",
      title: "Диагностика оборудования",
      subTitle: "1100 руб./час (минимум 1 час)",
      link: "/services/1"
    }
  ]

}
