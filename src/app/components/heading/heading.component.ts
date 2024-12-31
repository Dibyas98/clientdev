import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input() Title!: string; // Corrected type to string
  @Input() className: string = ''; // Default value for optional className
}
