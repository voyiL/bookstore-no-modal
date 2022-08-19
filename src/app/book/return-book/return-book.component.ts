import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {
  @Input() checkoutData = { id: 0, firstname: '', lastname: '', bookId: 0 }
  @Input() bookData = { id: 0, title: '', authorId: 0, isAvailable: true }
  caption = 'Return Book';
  bookId!: number;
  firstname!: string;
  lastname!: string;
  title!: string;
  checkoutId!: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // console.log(this.bookData)
    // console.log(this.checkoutData)
    this.checkoutId = this.checkoutData.id;
    // console.log(this.checkoutId)
  }

  returnBook() {
    // console.log(this.checkoutId)
    this.bookService.returnBook(this.checkoutId).subscribe((data) => console.log(data));
    this.bookData.isAvailable = true;
    this.bookService.updateBook(this.bookData, this.bookData.id).subscribe();
    window.location.reload();
    // console.log(this.bookData);
    // console.log('__________________')
    // console.log(this.bookData.id)
  }
  cancel() {
    window.location.reload();
  }

}
