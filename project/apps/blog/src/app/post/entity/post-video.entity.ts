import { IVideoPost } from '@project/shared/app-types';
import { PostEntity } from './post.entity';

export class PostVideoEntity extends PostEntity implements IVideoPost {
  public title: string;
  public url: string;

  constructor(post: IVideoPost) {
    super(post);
    this.fillEntity(post);
  }

  public fillEntity(post: IVideoPost) {
    super.fillEntity(post);
    this.title = post.title;
    this.url = post.url;
  }
}
