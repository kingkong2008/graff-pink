import { Component, OnInit, EventEmitter } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  onClick() {
    this.headerService.receiveEventFromHeader();
  }

  ngOnInit() {
  }

}
