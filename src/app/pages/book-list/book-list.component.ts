import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  public bookList: IBook[];
  bookListSubscription: Subscription;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks();
    this.bookListSubscription = this.bookService.booksUpdate.subscribe(respBookAPI => this.bookList = respBookAPI);
  }

  handlerBookDetails(id: string): void {
    this.router.navigate(['/book'], { queryParams: { id } });
  }

  handlerFabBtn() {
    this.router.navigate(['/book']);
  }

  ngOnDestroy() {
    this.bookListSubscription.unsubscribe();
  }

}
