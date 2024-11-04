import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorService } from '../authors/service/author.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  standalone: true,
  styleUrls: ['./authors.component.css'],
  imports: [NgIf]
})
export class AuthorsComponent {
  author: any = null;
  message: string = '';

  constructor(private authorService: AuthorService) {}

  submit(id: string): void {
    this.authorService.getAuthorById(id).subscribe(
      (data: Author) => {
        if (data) {
          this.author = data;
          this.message = '';
        } else {
          this.author = null;
          this.message = 'Author not found.';
        }
      },
      (error: any) => {
        this.author = null;
        this.message = 'Error retrieving author information.';
      }
    );
  }
}