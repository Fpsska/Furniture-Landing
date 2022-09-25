import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FurnitureComponent } from './pages/furniture/furniture.component'
import { ShopComponent } from './pages/shop/shop.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { NoFoundComponent } from './pages/no-found/no-found.component'

// /. imports

const routes: Routes = [
  { path: '', component: FurnitureComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
