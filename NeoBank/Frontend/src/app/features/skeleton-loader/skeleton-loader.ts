import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  imports: [CommonModule],
  templateUrl: './skeleton-loader.html',
  styleUrls: ['./skeleton-loader.css']
})
export class SkeletonLoaderComponent {
  @Input() rows = 4;
}