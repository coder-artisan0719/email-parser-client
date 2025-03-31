import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PartnerTableComponent } from './components/partner-table/partner-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PartnerTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'partner-portal'; 
}
