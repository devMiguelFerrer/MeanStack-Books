import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IAuthor } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {

  public authorList: IAuthor[];
  authorListSubscription: Subscription;

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.authorService.getAuthors();
    this.authorListSubscription = this.authorService.authorsUpdate.subscribe(respAuthorAPI => this.authorList = respAuthorAPI);
  }

  handlerAuthorDetails(id: string): void {
    this.router.navigate(['/author'], { queryParams: { id } });
  }

  handlerFabBtn() {
    this.router.navigate(['/author']);
  }

  ngOnDestroy() {
    this.authorListSubscription.unsubscribe();
  }

}
