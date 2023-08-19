import { ITextPost } from '@project/shared/app-types';
import { PostEntity } from './post.entity';

export class PostTextEntity extends PostEntity implements ITextPost {
  public title: string;
  public announcement: string;
  public text: string;

  constructor(post: ITextPost) {
    super(post);
    this.fillEntity(post);
  }

  public fillEntity(post: ITextPost) {
    super.fillEntity(post);
    this.title = post.title
    this.announcement = post.announcement
    this.text = post.text
  }
}
