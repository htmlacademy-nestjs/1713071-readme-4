import { IPost } from './post.interface';

export interface ILinkPost extends IPost {
  url: string,
  description?: string
}
