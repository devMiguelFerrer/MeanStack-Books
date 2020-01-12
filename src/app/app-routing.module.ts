import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book', component: BookDetailsComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'author', component: AuthorDetailsComponent },
  { path: '**', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
