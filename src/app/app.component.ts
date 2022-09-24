import { Component } from '@angular/core'

import { IfeaturesData } from './components/column/column.interfaces'
import { Iproducts } from './components/product/product.interfaces'
import { Itestimonial } from './components/testimonial/testimonial.interfaces'

import { featuresData } from './data/featuresData'
import { productsData } from './data/productsData'
import { testimonialsData } from './data/testimonialsData'

// /. imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Make Your Interior More Minimalistic & Modern'
  subtitle =
    'Turn your room with panto into a lot more minimalist and modern with ease and speed'
  featuresDataTemplates: IfeaturesData[] = featuresData
  productDataTemplates: Iproducts[] = productsData
  testimonialDataTemplates: Itestimonial[] = testimonialsData
}
