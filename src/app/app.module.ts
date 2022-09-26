import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { SwiperModule } from 'swiper/angular'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'
import { ListComponent } from './components/list/list.component'
import { ColumnComponent } from './components/column/column.component'
import { ProductComponent } from './components/product/product.component'
import { ButtonComponent } from './components/button/button.component'
import { SliderButtonComponent } from './components/slider-button/slider-button.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { SliderComponent } from './components/slider/slider.component'
import { ShopComponent } from './pages/shop/shop.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { FurnitureComponent } from './pages/furniture/furniture.component'
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { PlaceholderSectionComponent } from './components/placeholder-section/placeholder-section.component'

// /. imports

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ListComponent,
    ColumnComponent,
    ProductComponent,
    ButtonComponent,
    SliderButtonComponent,
    TestimonialComponent,
    SliderComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    FurnitureComponent,
    NoFoundComponent,
    PlaceholderSectionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
