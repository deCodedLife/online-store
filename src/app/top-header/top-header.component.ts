import { Component, OnInit } from '@angular/core';
import { Category } from "../category/category.component";

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.less']
})
export class TopHeaderComponent {
  public toolCategories: Category[] = [
    {
      image: "https://era-climata.ru/storage/Funai/%D0%9A%D0%BE%D0%BD%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D1%8B%20Funai.png",
      title: "Кондиционеры",
      link: "/conditioners"
    },
    {
      image: "https://www.bosch-thermotechnology.com/ocsmedia/optimized/full/o478738v305_p2_Climate_Line_5000i_v1.png",
      title: "Сплит-системы",
      link: "/conditioners"
    },
    {
      image: "http://novosibdom.ru/story/articles/forced_ventilation.jpg",
      title: "Вентиляция",
      link: "/conditioners"
    },
    {
      image: "https://era-climata.ru/storage/Funai/%D0%9A%D0%BE%D0%BD%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D1%8B%20Funai.png",
      title: "Вентиляция",
      link: "/conditioners"
    }
  ]
}
