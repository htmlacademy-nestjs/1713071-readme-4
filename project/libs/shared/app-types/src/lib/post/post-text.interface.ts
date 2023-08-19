import { IPost } from './post.interface';

export interface ITextPost extends IPost {
  title: string;
  announcement: string;
  text: string;
}
