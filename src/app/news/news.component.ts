import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ModalService } from '../modal/modal.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public allAlbums: Album[] = [];
  public albumsPerPage = 4;
  public selectedPage = 1;
  public albumsNotFound = false;

  constructor(private albumService: AlbumService,
              private modalService: ModalService,
              private headerService: HeaderService) { }

  get albums(): Album[] {
    let pageIndex = (this.selectedPage - 1) * this.albumsPerPage;
    if (this.allAlbums.length > 1) {
      return this.allAlbums.slice(pageIndex, pageIndex + this.albumsPerPage);
    }
    else return this.allAlbums;
  }

  showMore() {
    this.albumsPerPage += 4;
  }

  ngOnInit() {
    this.albumService.getAll().subscribe(data => {
      this.allAlbums = data;
      this.modalService.setAlbumNumbers = Array.from(new Set(this.allAlbums.map(({ albumId }) => albumId.toString())));
    },
      error => this.albumsNotFound = true);

    this.modalService.formChange
      .subscribe(data =>
        this.albumService.searchAlbum(data)
          .subscribe(el => {
              this.albumsNotFound = false;
              this.albumsPerPage = 4;
              this.modalService.onClose = false;
            if (Array.isArray(el)) {
              this.allAlbums = el
            } else {
              this.allAlbums = [];
              this.allAlbums.push(el);
            }
          },
            error => this.albumsNotFound = true)
      );

    this.headerService.logoClicked.subscribe(() => {
      this.albumService.getAll().subscribe(data => {
          this.albumsNotFound = false;
          this.albumsPerPage = 4;
          this.allAlbums = data;
          this.modalService.setAlbumNumbers = Array.from(new Set(this.allAlbums.map(({ albumId }) => albumId.toString())));
        },
        error => this.albumsNotFound = true);
    })
  }
}
