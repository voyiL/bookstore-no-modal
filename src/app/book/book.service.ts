import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../types/book';
import { ICheckout } from '../types/checkout';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<IBook[]>('http://localhost:3000/book')
  }
  addBook(book: any) {
    return this.http.post('http://localhost:3000/book/create', book)
  }
  updateBook(book: any, id: any) {
    return this.http.patch(`http://localhost:3000/book/${id}`, book)
  }
  deleteBook(id: any) {
    return this.http.delete(`http://localhost:3000/book/${id}`)
  }
  getCheckoutByBookId(id: any) {
    return this.http.get<ICheckout>(`http://localhost:3000/checkout/${id}`)
  }
  checkBookOut(checkout: any) {
    return this.http.post('http://localhost:3000/checkout/create', checkout)
  }
  returnBook(id: any) {
    return this.http.delete(`http://localhost:3000/checkout/${id}`)
  }
}
