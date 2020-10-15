import { Component, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels: Label[] = ['Pan', 'Refresco', 'Tacos'];
  public data1: MultiDataSet = [
    [350, 450, 1000],
  ];
  public colors: Color[]=[
{backgroundColor: ['#d1e600', '#111098','#ad4166']}
  ];
}
