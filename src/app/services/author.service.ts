import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { IAuthor } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


  private URL = 'http://localhost:5000/api';

  public authorsUpdate = new Subject<IAuthor[]>();
  public authorUpdate = new Subject<IAuthor>();

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * GET all authors
   * @return void
   */
  public getAuthors(): void {
    this.http.get<any>(`${this.URL}/authors`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.authorsUpdate.next(responseAPI.data);
        } else {
          this.authorsUpdate.next([]);
        }
      }
    );
  }

  /**
   * GET details of a author by ID
   * @return void
   */
  public getAuthor(id: string): void {
    this.http.get<any>(`${this.URL}/author/${id}`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.authorUpdate.next(responseAPI.data);
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

  /**
   * DELETE a author by ID
   * @return void
   */
  public deleteAuthor(id: string): void {
    this.http.delete<any>(`${this.URL}/author/${id}`).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.router.navigate(['/authors']);
        } else {
          console.warn('error');
        }
      }
    );
  }

  /**
   * UPDATE a author by ID
   * @return void
   */
  public updateAuthor(ID: string, author: IAuthor): void {
    this.http.put<any>(`${this.URL}/author/${ID}`, author).subscribe(
      (responseAPI) => {
        if (responseAPI.success) {
          this.router.navigate(['/authors']);
        } else {
          console.warn('error');
        }
      }
    );
  }

}
