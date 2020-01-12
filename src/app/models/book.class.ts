import { IAuthor } from './author';
import { IBook } from './book';

export class Book implements IBook {

  name: string;
  isbn: string;
  author: IAuthor;

  constructor(name: string, isbn: string, author: IAuthor) {
    this.name = name;
    this.isbn = isbn;
    this.author = author;
  }

}
