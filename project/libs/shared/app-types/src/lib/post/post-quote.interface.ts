import { IPost } from './post.interface';

export interface IQuotePost extends IPost {
  text: string;
  author: string;
}
