import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { NgForm } from '@angular/forms';
import { Query } from '../query';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {
  public byNumber = true;
  public byId = false;

  constructor(private modalService: ModalService) { }

  get albumNumbers() {
    return this.modalService.albumNumbers;
  }
  onClose() {
    this.modalService.onClose = false;
  }
  selectNumber(event: any) {
    this.byNumber = event;
    this.byId = !event;
  }
  selectId(event: any) {
    this.byId = event;
    this.byNumber = !event;
  }
  onSubmit(form: NgForm) {
    let query: Query;
    if (this.byNumber) {
      query = new Query(form.value.album_number,'byNumber');
    } else {
      query = new Query(form.value.photo_id,'byId');
    }
    this.modalService.receiveFormData(query);
  }
  ngOnInit() {
  }
}
