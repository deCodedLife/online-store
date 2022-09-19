import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DropdownComponent} from "../dropdown/dropdown.component";

export class DropContent
{
  id: number
  title: string
  display: boolean
  price: number
  count: number
  unitTitle: string
  additional: DropContent
}

@Component({
  selector: 'app-calcuator',
  templateUrl: './calcuator.component.html',
  styleUrls: ['./calcuator.component.less']
})

export class CalcuatorComponent {

  public installationSum: number = 0
  public trackSum: number = 0
  public servicesSum: number = 0
  public additionsSum: number = 0
  public otherSum: number = 0

  updateInstallation($sum: any) {this.installationSum = $sum; this.calculate()}
  updateTrack($sum: any) {this.trackSum = $sum; this.calculate()}
  updateServices($sum: any) {this.servicesSum = $sum; this.calculate()}
  updateAdditions($sum: any) {this.additionsSum = $sum; this.calculate()}
  updateOtherSum($sum: any) {this.otherSum = $sum; this.calculate()}

  calculate() {
    this.TotalSum = 0
    this.TotalSum = this.installationSum + this.trackSum + this.servicesSum  + this.additionsSum + this.otherSum
  }


  public FuelPrice: number = 54
  public FuelConsumption: number = 10
  public TransportCosts: number = 0

  public TotalSum: number = 0

  public installationTypes: DropContent[] = [
    { id: 1, count: 0, title: "Сплит-система 07-09", display: true, price: 4500, unitTitle: "шт", additional: new DropContent },
    { id: 2, count: 0, title: "Сплит-система 12", display: true, price: 5000, unitTitle: "шт", additional: new DropContent },
    { id: 3, count: 0, title: "Сплит-система 18", display: true, price: 6200, unitTitle: "шт", additional: new DropContent },
    { id: 4, count: 0, title: "Сплит-система 24", display: true, price: 6900, unitTitle: "шт", additional: new DropContent },
    { id: 5, count: 0, title: "Сплит-система 30", display: true, price: 7400, unitTitle: "шт", additional: new DropContent },
    { id: 6, count: 0, title: "Сплит-система полупром 18", display: true, price: 7000, unitTitle: "шт", additional: new DropContent },
    { id: 7, count: 0, title: "Сплит-система полупром 24", display: true, price: 7700, unitTitle: "шт", additional: new DropContent },
    { id: 8, count: 0, title: "Сплит-система полупром 36", display: true, price: 9200, unitTitle: "шт", additional: new DropContent },
    { id: 9, count: 0, title: "Сплит-система полупром 48", display: true, price: 10900, unitTitle: "шт", additional: new DropContent },
    { id: 10, count: 0, title: "Сплит-система полупром 60", display: true, price: 12500, unitTitle: "шт", additional: new DropContent },
  ]

  public trackTypes: DropContent[] = [
    { id: 1, count: 0, title: '6,35 - 9,52 (1/4" - 3/8")', display: true, price: 940, unitTitle: "м.п.", additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 300, unitTitle: "м.п.", additional: new DropContent} },
    { id: 2, count: 0, title: '6,35 - 12,70 (1/4" - 1/2")', display: true, price: 970, unitTitle: "м.п.", additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 300, unitTitle: "м.п.", additional: new DropContent} },
    { id: 3, count: 0, title: '6,35 - 15,89 (1/4" - 5/8")', display: true, price: 1160, unitTitle: "м.п.",additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 500, unitTitle: "м.п.", additional: new DropContent} },
    { id: 3, count: 0, title: '9,52 -15,89 (3/8" - 5/8")', display: true, price: 1330, unitTitle: "м.п.", additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 500, unitTitle: "м.п.", additional: new DropContent} },
    { id: 4, count: 0, title: '9,52 - 19,05 (3/8" - 3/4")', display: true, price: 1470, unitTitle: "м.п.", additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 500, unitTitle: "м.п.", additional: new DropContent} },
    { id: 5, count: 0, title: '12,70 - 19,05 (1/2" - 3/4")', display: true, price: 1510, unitTitle: "м.п.", additional: {
        id: 0, count: 0, title: "Закладка трасс", display: false, price: 500, unitTitle: "м.п.", additional: new DropContent} },
  ]

  public serviceWorks: DropContent[] = [
    { id: 1, count: 0, title: "Сплит-система 07-18", display: true, price: 2200, unitTitle: "шт", additional: new DropContent },
    { id: 2, count: 0, title: "Сплит-система 24-36", display: true, price: 2400, unitTitle: "шт", additional: new DropContent },
    { id: 3, count: 0, title: "Сплит-система 48-60", display: true, price: 2700, unitTitle: "шт", additional: new DropContent },
    { id: 4, count: 0, title: "Сплит-система полупром 18-36", display: true, price: 2800, unitTitle: "шт", additional: new DropContent },
    { id: 5, count: 0, title: "Сплит-система полупром 48-60", display: true, price: 3100, unitTitle: "шт", additional: new DropContent }
  ]

  public additions: DropContent[] = [
    { id: 0, count: 0, title: "Дополнительные работы и материалы", display: false, price: 200, unitTitle: "см", additional: new DropContent },
    { id: 0, count: 0, title: "Кабель-канал 20*10", display: true, price: 200, unitTitle: "м.п.", additional: new DropContent },
    { id: 0, count: 0, title: "Кабель-канал 60*60", display: true, price: 600, unitTitle: "м.п.", additional: new DropContent },
    { id: 0, count: 0, title: "Штробление", display: true, price: 500, unitTitle: "кг", additional: new DropContent },
    { id: 0, count: 0, title: "Фреон R22", display: true, price: 2000, unitTitle: "кг", additional: new DropContent },
    { id: 0, count: 0, title: "Фреон R32", display: true, price: 4400, unitTitle: "кг", additional: new DropContent },
    { id: 0, count: 0, title: "Фреон R404", display: true, price: 3800, unitTitle: "кг", additional: new DropContent },
    { id: 0, count: 0, title: "Фреон R410", display: true, price: 3800, unitTitle: "кг", additional: new DropContent },
    { id: 0, count: 0, title: "Сверление доп отв. до Д=45", display: true, price: 50, unitTitle: "см", additional: new DropContent },
    { id: 0, count: 0, title: "Сверление доп отв. до Д=110", display: true, price: 60, unitTitle: "см", additional: new DropContent }
  ]

  public others: DropContent[] = [
    { id: 0, count: 0, title: "Прочие работы", display: false, price: 0, unitTitle: "ч", additional: new DropContent},
    { id: 0, count: 0, title: "Диагностические работы", display: true, price: 1100, unitTitle: "ч", additional: new DropContent },
    { id: 0, count: 0, title: "Ремонтные работы", display: true, price: 1300, unitTitle: "ч", additional: new DropContent }
  ]

}
