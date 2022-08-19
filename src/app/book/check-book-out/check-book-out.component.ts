import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/book/book.service';
import { IBook } from 'src/app/types/book';

@Component({
  selector: 'app-check-book-out',
  templateUrl: './check-book-out.component.html',
  styleUrls: ['./check-book-out.component.scss']
})
export class CheckBookOutComponent implements OnInit {
  @Input() bookData = { id: 0, title: '', authorId: 0, isAvailable: true }
  books$: IBook[] = [];
  bookId!: number;
  firstname!: string;
  lastname!: string;
  title!: string;
  caption = 'Checkout';
  public static bookData: IBook;
  // bookData: IBook
  checkBookOutComponent: CheckBookOutComponent;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
    // console.log(this.bookData)
    this.bookId = this.bookData.id;
    // this.title = this.bookData.title;
    // console.log(this.bookId, this.title)
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data) => { this.books$ = data, console.log(data) })
  }
  checkoutBookOut(checkoutForm: NgForm) {
    this.bookService.checkBookOut(checkoutForm.value).subscribe((data) => console.log(data));
    this.bookData.isAvailable = false;
    this.bookService.updateBook(this.bookData, this.bookId).subscribe((data) => console.log(data))
    window.location.reload();
    // console.log(checkoutForm.value)
  }
  cancel() {
    window.location.reload();
  }

}
