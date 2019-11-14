import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {addParams} from '../helpers/addQueryParamsToUrl';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
      private http: HttpClient
  ) { }

  getPosts(query: {}): Observable<Post[]> {
    console.log('ok');
    const url = addParams(this.apiUrl, query);
    return this.http.get<Post[]>(url);
  }
}
