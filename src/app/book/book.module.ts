import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { CheckBookOutComponent } from './check-book-out/check-book-out.component';
import { ReturnBookComponent } from './return-book/return-book.component';



@NgModule({
  declarations: [
    BookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    ListBooksComponent,
    CheckBookOutComponent,
    ReturnBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class BookModule { }
