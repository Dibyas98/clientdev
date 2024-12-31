import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnChanges {
  isActive: boolean = false;
  selectedDepartment: string = 'Select Department'; // Default text
  @Input() filterData: string[] = []; // Input data for department list

  @Input() filterTitle:string=""

  // Lifecycle hook to detect changes to @Input properties
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterTitle']) {
      console.log('Filter Data:', this.filterTitle); // Log whenever filterData changes
    }
  }

  // Toggles the dropdown visibility when clicked
  toggleDropDown(event: Event): void {
    event.stopPropagation(); // Prevent event propagation to the document
    this.isActive = !this.isActive; // Toggle dropdown visibility
  }

  // Close dropdown if clicked outside the dropdown
  @HostListener('document:click', ['$event'])
  closeDropDown(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest(`${this.filterTitle}.dropdown-container`)) {
      console.log(`${this.filterTitle(0,6)}.dropdown-container`);
      
      this.isActive = false; // Close the dropdown if the click is outside
    }
  }

  // Prevent closing the dropdown when clicking inside
  preventClickInsideDropdown(event: Event): void {
    event.stopPropagation(); // Prevent the click from propagating to document
  }

  // Handle department selection
  selectDepartment(department: string): void {
    this.selectedDepartment = department; // Update selected department
    this.isActive = false; // Close the dropdown
  }
}
