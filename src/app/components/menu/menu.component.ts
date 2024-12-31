import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface MenuData {
  displayName: string;
  type: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  imports:[CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input()
  MenuData!: MenuData; // Use the defined interface here
}
