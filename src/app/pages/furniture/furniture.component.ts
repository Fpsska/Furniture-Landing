import { Component, OnInit } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'
import { Iproduct } from 'src/app/models/product'
import { Itestimonial } from 'src/app/models/testimonial'

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
  featuresDataTemplates: Ifeature[] = featuresData
  productDataTemplates: Iproduct[] = productsData
  testimonialDataTemplates: Itestimonial[] = testimonialsData
  constructor() {}

  ngOnInit(): void {}
}
