import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { IBook } from '../models/book';
import { IResponseAPI } from '../models/respAPI';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL = 'http://localhost:5000/api';

  public booksUpdate = new Subject<IBook[]>();
  public bookUpdate = new Subject<IBook>();

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * GET all books
   * @return void
   */
  public getBooks(): void {
    this.http.get<IResponseAPI>(`${this.URL}/books`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.booksUpdate.next(responseAPI.data);
        } else {
          this.booksUpdate.next([]);
        }
      }
    );
  }

  /**
   * GET details of a book by ID
   * @return void
   */
  public getBook(id: string): void {
    this.http.get<IResponseAPI>(`${this.URL}/book/${id}`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.bookUpdate.next(responseAPI.data);
        } else {
          this.router.navigate(['/books']);
        }
      }
    );
  }

  /**
   * DELETE a book by ID
   * @return void
   */
  public deleteBook(id: string): void {
    this.http.delete<IResponseAPI>(`${this.URL}/book/${id}`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.router.navigate(['/books']);
        } else {
          console.warn('error');
        }
      }
    );
  }

  /**
   * UPDATE a book by ID
   * @return void
   */
  public updateBook(ID: string, book: IBook): void {
    this.http.put<IResponseAPI>(`${this.URL}/book/${ID}`, book).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.router.navigate(['/books']);
        } else {
          console.warn(responseAPI);
        }
      }
    );
  }

  /**
   * CREATE a book
   * @return void
   */
  public createBook(book: IBook): void {
    this.http.post<IResponseAPI>(`${this.URL}/book`, book).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.router.navigate(['/']);
        } else {
          console.warn(responseAPI);
        }
      }
    );
  }

}

