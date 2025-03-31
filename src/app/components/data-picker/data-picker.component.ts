import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-picker',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-picker.component.html',
  styleUrl: './data-picker.component.css',
})
export class DataPickerComponent {
  // Picker for Data
  showPicker = false;

  startDate: string = this.formatDate(new Date());
  endDate: string = this.formatDate(new Date());

  selectedStartDate = new Date();
  selectedEndDate = new Date();

  applyDateRange() {
    this.selectedStartDate = new Date(this.startDate);
    this.selectedEndDate = new Date(this.endDate);
    this.showPicker = false;
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
  }
}
