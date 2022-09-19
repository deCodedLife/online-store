import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { MinCardComponent } from './min-card/min-card.component';

import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { ConditionersComponent } from './conditioners/conditioners.component';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { CardComponent } from './card/card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryComponent } from './category/category.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { CalcuatorComponent } from './calcuator/calcuator.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TopHeaderComponent,
    FooterComponent,
    MinCardComponent,
    CardCarouselComponent,
    ConditionersComponent,
    HomeComponent,
    BlockComponent,
    CardComponent,
    ShoppingCartComponent,
    CategoryComponent,
    CategoryComponent,
    ProductPageComponent,
    CartProductComponent,
    ServicesComponent,
    ServiceCardComponent,
    CalcuatorComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
