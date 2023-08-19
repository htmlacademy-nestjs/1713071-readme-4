import { ILinkPost } from '@project/shared/app-types';
import { PostEntity } from './post.entity';

export class PostLinkEntity extends PostEntity implements ILinkPost {
  public url: string;
  public description?: string;

  constructor(post: ILinkPost) {
    super(post);
    this.fillEntity(post);
  }

  public fillEntity(post: ILinkPost) {
    super.fillEntity(post);
    this.url = post.url;
    this.description = post.description;
  }
}
