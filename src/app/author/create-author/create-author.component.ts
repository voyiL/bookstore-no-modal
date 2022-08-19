import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent {
  @Output() createAuthorEvent: EventEmitter<any> = new EventEmitter();
  title = "Add Author";
  id!: number;
  firstname!: string;
  lastname!: string;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
  }
  createAuthor(author: any) {
    this.authorService.createAuthor(author.value).subscribe((data) => console.log(data));
    window.location.reload();
  }
}
