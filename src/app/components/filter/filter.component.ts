import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, Output, EventEmitter, SimpleChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  

  // // Prevent click propagation inside the dropdown container
  preventClickInsideDropdown(event: Event): void {
    event.stopPropagation(); // Prevent the click from propagating to the document
  }

  @Input() isOpen = false; // Controls if the dropdown menu is open
  @Input() label = ''; // Button label
  @Input() menuItems: string[] = []; // Dropdown menu items
  selectedFilter: boolean | string = false // Default text
  @Output() toggle = new EventEmitter<void>(); // Emits when the dropdown is toggled

  onToggle() {
    this.toggle.emit();
  }


  selectDepartment(department: string): void {
    this.selectedFilter = department; // Update the selected department
  }

  constructor(private elRef: ElementRef) {}

   // Close dropdown if click is outside the component
   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const clickedInside = this.elRef.nativeElement.contains(event.target);
     if (!clickedInside) {
       this.isOpen = false; // Close the dropdown if the click is outside
     }
   }
}
