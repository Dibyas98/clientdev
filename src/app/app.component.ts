import { Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuditcomponentComponent } from './auditcomponent/auditcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'newapp';
}
