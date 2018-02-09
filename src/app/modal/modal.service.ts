import { Injectable, EventEmitter } from '@angular/core';
import { Query } from '../query';

@Injectable()
export class ModalService {
  formChange = new EventEmitter<Query>();
  private formData: string;
  private state = false;
  public albumNumbers: string[];

  constructor() { }

  set onClose(state: boolean) {
    this.state = state;
  }
  set setAlbumNumbers(num: string[]) {
    this.albumNumbers = num;
  }
  get stateModal(): boolean {
    return this.state;
  }

  receiveFormData(data: Query) {
    this.formChange.emit(data);
  }

}
