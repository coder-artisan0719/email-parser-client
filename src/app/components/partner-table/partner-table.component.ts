import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../models/partner.model'; 
import { columns } from '../../data/const';
import { DataPickerComponent  } from '../../components/data-picker/data-picker.component';
import { ButtonActionsComponent } from '../../components/button-actions/button-actions.component';


@Component({
  selector: 'app-partner-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DataPickerComponent,
    ButtonActionsComponent
  ],
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css']
})

export class PartnerTableComponent implements OnInit { 

  columns = columns;

  partnerList: Partner[] = [];
  loading = true;
  error = '';

  constructor(private partnerService: PartnerService) {}; 

  ngOnInit(): void { 

    this.partnerService.getPartners().subscribe({
      next: data => {
        this.partnerList =  Object.values(data);
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load partners.';
        this.loading = false;
      }
    });
  }
 
  sortTitle: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage = 1;
  itemsPerPage = 15;
  startItem = 1;
  coutItem = 15;
  
  get totalPages() {
    return Math.ceil(this.partnerList.length / this.itemsPerPage);
  }
 
  // Sorting
  sortedPartners(title: string) { 
    if (this.sortTitle === title) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortTitle = title;
      this.sortDirection = 'asc';
    }
 
    this.partnerList = [...this.partnerList].sort((a, b) => {
      const valA = typeof a[title] === 'string' && !isNaN(+a[title]) ? +a[title] : a[title];
      const valB = typeof b[title] === 'string' && !isNaN(+b[title]) ? +b[title] : b[title];
    
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    }); 
  }

  get paginatedPartners() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.coutItem = this.startItem + this.partnerList.slice(start, start + this.itemsPerPage).length - 1;
    return this.partnerList.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.startItem = this.itemsPerPage * (this.currentPage - 1) + 1;
    }
  }  
  
}

 