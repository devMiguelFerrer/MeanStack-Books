import { Author } from './../../models/author.class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IAuthor } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {

  authorDetailsSubscription: Subscription;
  queryParamsSubscription: Subscription;
  authorForm: FormGroup;
  author: IAuthor;
  editAuthor: boolean;
  idParams: Params;

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.editAuthor = false;
    this.queryParamsSubscription = this.route.queryParams.subscribe(id => {
      this.idParams = id;
      if (!this.idParams.id) {
        this.editAuthor = true;
        this.createBookForm();
      } else {
        this.authorService.getAuthor(this.idParams.id);
        this.authorDetailsSubscription = this.authorService.authorUpdate.subscribe(author => {
          this.author = author;
          this.createBookForm();
        });
      }
    });
  }

  handlerDeleteAuthor(id: string) {
    this.authorService.deleteAuthor(id);
  }

  handlerCancelEditAuthor() {
    this.editAuthor = !this.editAuthor;
    if (!this.idParams.id) {
      this.router.navigate(['/authors']);
    }
  }

  handlerSubmitAuthor() {
    if (!!this.author._id) {
      this.authorService.updateAuthor(this.author._id, this.authorForm.value);
    } else {
      this.authorService.createAuthors(this.authorForm.value);
    }
  }

  createBookForm() {
    if (!this.author) {
      this.author = new Author('', '');
    }
    this.authorForm = new FormGroup({
      firstName: new FormControl(
        this.author.firstName, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)] }
      ),
      lastName: new FormControl(
        this.author.lastName, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)] }
      ),
    });
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    if (!!this.authorDetailsSubscription) {
      this.authorDetailsSubscription.unsubscribe();
    }
  }

}
