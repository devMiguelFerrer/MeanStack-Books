import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.editAuthor = false;
    this.queryParamsSubscription = this.route.queryParams.subscribe(id => {
      this.authorService.getAuthor(id.id);
    });
    this.authorDetailsSubscription = this.authorService.authorUpdate.subscribe(author => {
      this.author = author;
      this.createBookForm();
    });
  }

  handlerDeleteAuthor(id: string) {
    this.authorService.deleteAuthor(id);
  }

  handlerEditAuthor() {
    this.editAuthor = !this.editAuthor;
  }

  handlerSubmitAuthor() {
    this.authorService.updateAuthor(this.author._id, this.authorForm.value);
  }

  createBookForm() {
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
    this.authorDetailsSubscription.unsubscribe();
  }

}
