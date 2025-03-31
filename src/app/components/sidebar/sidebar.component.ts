import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarItems } from '../../data/const';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarItems = sidebarItems;
  isSidebarOpen = false;
  openLogoTab() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
