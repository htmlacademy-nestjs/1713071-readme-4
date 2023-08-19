import { IPost } from './post.interface';

export interface IVideoPost extends IPost {
  title: string;
  url: string;
}
