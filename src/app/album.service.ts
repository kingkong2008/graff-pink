import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';
import { Query } from './query';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos');
  }

  searchAlbum(query: Query) {
    switch (query.queryType) {
      case 'byNumber': {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos?albumId='+query.queryData);
      }
      case 'byId': {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos/'+query.queryData);
      }
    }
  }
}
