import { Component } from '@angular/core'

import { IfeaturesData } from './components/column/column.interfaces'

import { featuresData } from './data/featuresData'

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
}
