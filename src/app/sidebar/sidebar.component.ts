import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../components/menu/menu.component';
import { Menu } from '../../Data/MenuList';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,MenuComponent,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 MenuList = Menu;
 
 

}
