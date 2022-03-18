import {Injectable} from '@angular/core';
import {ALBUMS} from './fake-db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class AlbumsService {
  
    BASE_URL = 'https://jsonplaceholder.typicode.com';
  
    constructor(private client: HttpClient) {
    }
  
    // getPosts() {
    //   return of(POSTS);
    // }
    //
    // getPost(id: number) {
    //   const post = POSTS.find((x) => x.id === id);
    //   return of(post);
    // }
  
    deleteAlbum(id: number): Observable<any> {
      return this.client.delete(`${this.BASE_URL}/albums/${id}`);
    }
}