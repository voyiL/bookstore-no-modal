import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from 'src/app/author/author.service';
import { IAuthor } from 'src/app/types/author';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  @Input() bookData = { id: 0, title: '', authorId: 0, isAvailable: true }
  caption = 'Update Book'
  id!: number;
  title!: string;
  isAvailable: boolean = true;
  authorId!: number;
  authors$: IAuthor[] = [];
  constructor(private authorService: AuthorService, private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllAuthors();
    this.id = this.bookData.id;
    this.title = this.bookData.title;
    this.isAvailable = this.bookData.isAvailable;
    this.authorId = this.bookData.authorId;
  }
  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => { this.authors$ = data })
  }
  updateBook(bookForm: NgForm) {
    const id = bookForm.value.id
    this.bookService.updateBook(bookForm.value, id).subscribe((data) => console.log(data));
    window.location.reload();
  }
  cancel() {
    window.location.reload();
  }

}
