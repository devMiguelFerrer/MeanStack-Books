import { IAuthor } from './author';

export interface IBook {
  name: string;
  isbn: string;
  author: IAuthor;
  _id?: string;
}
