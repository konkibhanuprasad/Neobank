import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.html',
  styleUrls: ['./chart-card.css']
})
export class ChartCard {

  @Input() title: string = '';
}