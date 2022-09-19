import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ConditionersComponent} from "./conditioners/conditioners.component";
import {HomeComponent} from "./home/home.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ServicesComponent} from "./services/services.component";
import {CalcuatorComponent} from "./calcuator/calcuator.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conditioners', component: ConditionersComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'calculator', component: CalcuatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
