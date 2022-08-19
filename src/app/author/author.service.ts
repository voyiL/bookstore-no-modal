import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../types/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  getAllAuthors() {
    return this.http.get<IAuthor[]>('http://localhost:3000/author');
  }

  // getAllAuthors() {
  //   return this.http.get('http://localhost:3000/author')
  // }
  getAuthor(id: any) {
    return this.http.get(`http://localhost:3000/author/${id}`)
  }
  createAuthor(author: any) {
    return this.http.post('http://localhost:3000/author/create', author);
  }
  updateAuthor(author: any, id: any) {
    return this.http.patch(`http://localhost:3000/author/${id}`, author)
  }
  deleteAuthor(id: any) {
    return this.http.delete(`http://localhost:3000/author/${id}`)
  }
}
