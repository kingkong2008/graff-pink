import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  constructor(private modalSevice: ModalService) { }
  modalOpen() {
    this.modalSevice.onClose=true;
  }
  ngOnInit() {
  }

}
