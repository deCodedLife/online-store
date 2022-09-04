import { Component, OnInit } from '@angular/core';

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
  color?: any
}

export interface MiniCard {
  id: number
  image: string
  price: number
  title: string
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
      id: 0, title: "Кондиционеры", subtitle: "от 10 000 руб",
      image: "https://era-climata.ru/storage/Funai/%D0%9A%D0%BE%D0%BD%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D1%8B%20Funai.png",
      color: "#119da4",
      link: "/conditioners"
    },
    {
      id: 1, title: "Услуги", subtitle: "От 6 000 руб",
      image: "https://andromeda.md/images/products/Fyh8vBVnTn.png",
      color: "#ffc857",
      link: "/"
    }
  ]

  public allCards: MiniCard[] = [
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    },
    {
      id: 0,
      price: 2620,
      image: "https://vozduh.by/image/cache/catalog/zoomos/1965659-1000x1000.jpg",
      title: "Ballu BSGRI-12HN"
    }
  ]

}
