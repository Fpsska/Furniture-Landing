import { Component, OnInit } from '@angular/core'

import { IfeaturesData } from '../../components/column/column.interfaces'
import { Iproducts } from '../../components/product/product.interfaces'
import { Itestimonial } from '../../components/testimonial/testimonial.interfaces'

import { featuresData } from '../../data/featuresData'
import { productsData } from '../../data/productsData'
import { testimonialsData } from '../../data/testimonialsData'

// /. imports

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  title = 'Make Your Interior More Minimalistic & Modern'
  subtitle =
    'Turn your room with panto into a lot more minimalist and modern with ease and speed'
  featuresDataTemplates: IfeaturesData[] = featuresData
  productDataTemplates: Iproducts[] = productsData
  testimonialDataTemplates: Itestimonial[] = testimonialsData
  constructor() {}

  ngOnInit(): void {}
}
