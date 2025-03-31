import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { buttonList } from '../../data/const';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-button-actions',
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './button-actions.component.html',
  styleUrl: './button-actions.component.css',
})
export class ButtonActionsComponent {
  buttonList = buttonList;

  // Modal
  isModalOpen = false;
  titleModal = '';

  openModal(title: string) {
    this.isModalOpen = true;
    this.titleModal = title;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
