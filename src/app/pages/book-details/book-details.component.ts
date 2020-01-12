import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { IAuthor } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  bookDetailsSubscription: Subscription;
  bookListSubscription: Subscription;
  queryParamsSubscription: Subscription;
  bookForm: FormGroup;
  book: IBook;
  editBook: boolean;
  authorsList: IAuthor[];

  constructor(private route: ActivatedRoute, private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.editBook = false;
    this.queryParamsSubscription = this.route.queryParams.subscribe(id => {
      this.bookService.getBook(id.id);
    });
    this.bookDetailsSubscription = this.bookService.bookUpdate.subscribe(book => {
      this.book = book;
      this.createBookForm();
    });
    this.authorService.getAuthors();
    this.bookListSubscription = this.authorService.authorsUpdate.subscribe(authors => {
      this.authorsList = authors;
    });
  }

  handlerDeleteBook(id: string) {
    this.bookService.deleteBook(id);
  }

  handlerEditBook() {
    this.editBook = !this.editBook;
  }

  handlerSubmitBook() {
    this.bookService.updateBook(this.book._id, this.bookForm.value);
  }

  createBookForm() {
    this.bookForm = new FormGroup({
      name: new FormControl(this.book.name, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)] }),
      isbn: new FormControl(this.book.isbn, { validators: [Validators.required, Validators.minLength(10), Validators.maxLength(18)] }),
      author: new FormControl(this.book.author._id, { validators: Validators.required }),
    });
  }

  ngOnDestroy() {
    this.bookDetailsSubscription.unsubscribe();
    this.bookListSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
