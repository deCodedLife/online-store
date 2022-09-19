import { Component, OnInit } from '@angular/core';
import { Category } from "../category/category.component";

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
  color?: any
  categories: Category[]
}

export interface MiniCard {
  id: number
  image: string
  price: number
  title: string
  link: string
}

export interface ViewCards {
  cards: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  public banners: Banner[] = [
    {
      id: 0, title: "Оборудование", subtitle: "от 10 000 руб",
      image: "assets/Кондиционеры Funai.png",
      color: "#119da4",
      link: "/conditioners",
      categories: [
        {
          image: "assets/Кондиционеры Funai.png",
          title: "Бытовые кондиционеры",
          link: "/conditioners"
        },
        {
          image: "assets/Полупромышленные.png",
          title: "Полупромышленные кондиционеры",
          link: "/conditioners"
        },
        {
          image: "assets/промышленные.png",
          title: "Промышленный холод",
          link: "/conditioners"
        },
        {
          image: "assets/Вентиляция.jpg",
          title: "Вентиляция",
          link: "/conditioners"
        }
      ]
    },
    {
      id: 1, title: "Услуги", subtitle: "От 1 100 руб",
      image: "assets/shapka5.png",
      color: "#119da4",
      link: "/",
      categories: [
        {
            image: "assets/shapka5.png",
            title: "Проектирование и монтаж систем кондиционирования",
            link: "/calculator"
          },
        {
          image: "assets/промышленные.png",
          title: "Проектирование, монтаж и обслуживание промышленных холодильных установок",
          link: "/services"
        },
        {
          image: "assets/Вентиляция.jpg",
          title: "Проектирование, монтаж и обслуживание вентиляционных установок",
          link: "/conditioners"
        },
        {
          image: "assets/Кондиционеры Funai.png",
          title: "Проектирование, монтаж и обслуживание систем отопления",
          link: "/conditioners"
        }
      ]
    }
  ]

  public allCards: MiniCard[] = [
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN",
      link: "product"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN",
      link: "/product"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN",
      link: "/product"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN",
      link: "/product"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN",
      link: "/product"
    }
  ]

}
