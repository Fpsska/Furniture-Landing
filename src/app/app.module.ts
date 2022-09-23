import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'
import { ListComponent } from './components/list/list.component'
import { ColumnComponent } from './components/column/column.component'
import { ProductComponent } from './components/product/product.component'
import { ButtonComponent } from './components/button/button.component';
import { SliderButtonComponent } from './components/slider-button/slider-button.component'

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
    SliderButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
