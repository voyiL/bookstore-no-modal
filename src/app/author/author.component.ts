import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from './author.service';
import { IAuthor } from '../types/author';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authorData!: IAuthor;
  authors$: IAuthor[] = [];
  isAdd = true;

  constructor(private authorService: AuthorService) { }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => { this.authors$ = data })
  }
  updateAuthorEmit(author: any) {
    this.authorData = author;
    this.isAdd = false;
  }
  deleteAuthor(id: any) {
    Swal.fire({
      title: 'Are you sure want to delete Author?',
      text: 'You will not be able to recover this author!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete Author!',
      cancelButtonText: 'No, keep Author',
    }).then((result) => {
      if (result.value) {
        this.authorService.deleteAuthor(id).subscribe();
        // Swal.fire(
        //   'Deleted!',
        //   'Author has been deleted',
        //   'success'
        //   );
        window.location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Author not deleted', 'error');
      }
    });
  }
  ngOnInit(): void {
    this.getAllAuthors();
  }
}
