import {Directive, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[navCloser]'
})
export class HeaderDirective {

  constructor(private renderer: Renderer2) {}
  @HostListener('click') open() {
    let navMain = document.querySelector('.main-nav');

    if (navMain.classList.contains('main-nav--closed')) {
      this.renderer.removeClass(navMain, 'main-nav--closed');
      this.renderer.addClass(navMain, 'main-nav--opened');
    } else {
      this.renderer.removeClass(navMain,'main-nav--opened');
      this.renderer.addClass(navMain, 'main-nav--closed');
    }
  }
}
