import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/types/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  @Output() updateBookEvent: EventEmitter<any> = new EventEmitter();
  books$: IBook[] = [];
  isAdd = true;
  bookData!: IBook;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data) => { this.books$ = data })
  }
  updateBook(book: any) {
    console.log(book)
    this.bookData = book;
    this.isAdd = false;
    this.updateBookEvent.emit(book)
  }
  createBook(book: any) {
    this.bookService.addBook(book).subscribe((data) => { return console.log(data) })
    window.location.reload();
  }
}
