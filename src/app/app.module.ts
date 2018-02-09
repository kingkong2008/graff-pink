import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { AlbumService } from './album.service';
import { ModalService } from './modal/modal.service';
import { HeaderService } from './header/header.service';
import { HeaderDirective } from './header/header.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    NewsComponent,
    FooterComponent,
    ModalComponent,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlbumService, ModalService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
