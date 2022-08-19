import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorService } from '../author/author.service';
import { CheckBookOutComponent } from './check-book-out/check-book-out.component';
import { IAuthor } from '../types/author';
import { IBook } from '../types/book';
import { BookService } from './book.service';
import { ICheckout } from '../types/checkout';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  bookData: IBook;
  checkoutData: ICheckout;
  isAdd = true;
  isUpdate = false
  isCheckout = false;
  isReturn = false;
  books$: IBook[] = [];
  authors$: IAuthor[] = [];
  // checkout$: ICheckout;
  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAllBooks()
    this.getAllAuthors()
  }
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data) => { this.books$ = data })
  }
  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => { this.authors$ = data })
  }
  updateBookEmit(book: any) {
    this.bookData = book;
    this.isAdd = false;
    this.isUpdate = true;
  }
  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe();
    window.location.reload();
  }
  checkoutBookEmit(book: IBook) {
    this.bookData = book;
    this.isAdd = false;
    this.isCheckout = true;
    // this.bookDataEmit.emit(book);
    // console.log(this.bookData)
  }
  returnBookEmit(book: IBook) {
    // this.bookService.getCheckoutId(book.id).subscribe((data: any) => { this.checkoutData = data });

    this.bookService.getCheckoutByBookId(book.id)
      .pipe(finalize(() => {
        this.bookData = book;
        this.isAdd = false;
        this.isReturn = true;
      }))
      .subscribe((data: ICheckout) => {
        this.checkoutData = data;
      });
  }

  // @ViewChild('myModal') myModal: any;
  //   private modalRef: any;
  // openModal() {
  //   this.modalRef = this.modalService.open(this.myModal, {
  //     size: 'md',
  //     centered: true,
  //     animation: true,
  //     keyboard: true,
  //     backdropClass: 'modal-backdrop',
  //     closeOnOutsideClick: true,
  //   })
  // }
  // closeModal() {
  //   this.modalService.close(this.modalRef);
  // }
  // closeOpenModal = () => {
  //   this.showModal = !this.showModal;
  // }

}
