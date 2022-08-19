import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent {
  @Output() updateAuthorEvent: EventEmitter<any> = new EventEmitter();
  @Input() authorData = { id: 0, firstname: '', lastname: '' }
  title = "Update Author";
  id!: number;
  firstname!: string;
  lastname!: string;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.id = this.authorData.id
    this.firstname = this.authorData.firstname;
    this.lastname = this.authorData.lastname
  }
  updateAuthor(authorForm: NgForm) {
    this.authorService.updateAuthor(authorForm.value, this.id).subscribe((data) => console.log(data))
    window.location.reload();
  }
  cancel() {
    window.location.reload();
  }
}
