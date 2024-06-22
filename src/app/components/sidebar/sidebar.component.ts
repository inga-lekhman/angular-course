import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  visibleSidebar: boolean = true;

  constructor() { }
}
