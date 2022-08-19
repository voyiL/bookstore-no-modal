import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthorService } from 'src/app/author/author.service';
import { IAuthor } from 'src/app/types/author';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  caption = 'Add Book'
  id!: number;
  title!: string;
  isAvailable: boolean = true;
  authorId!: number;
  authors$: IAuthor[] = [];
  constructor(private authorService: AuthorService, private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }
  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => { this.authors$ = data })
  }
  createBook(bookForm: NgForm) {
    this.bookService.addBook(bookForm.value).subscribe((data) => { return console.log(data) })
    window.location.reload();
  }

}
