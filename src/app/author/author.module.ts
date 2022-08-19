import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { TestComponent } from '../test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AuthorComponent,
    CreateAuthorComponent,
    UpdateAuthorComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    TestComponent
  ]
})
export class AuthorModule { }
