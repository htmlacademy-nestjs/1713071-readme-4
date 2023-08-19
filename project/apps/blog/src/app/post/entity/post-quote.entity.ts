import { IQuotePost } from '@project/shared/app-types';
import { PostEntity } from './post.entity';

export class PostQuoteEntity extends PostEntity implements IQuotePost {
  public text: string;
  public author: string;

  constructor(post: IQuotePost) {
    super(post);
    this.fillEntity(post);
  }

  public fillEntity(post: IQuotePost) {
    super.fillEntity(post);
    this.text = post.text;
    this.author = post.author;
  }
}
