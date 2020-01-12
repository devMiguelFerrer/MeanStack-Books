import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AppbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
