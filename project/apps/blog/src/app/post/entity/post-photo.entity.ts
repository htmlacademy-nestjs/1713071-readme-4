import { IPhotoPost } from '@project/shared/app-types';
import { PostEntity } from './post.entity';

export class PostPhotoEntity extends PostEntity implements IPhotoPost {
  public photo: string;

  constructor(post: IPhotoPost) {
    super(post);
    this.fillEntity(post);
  }

  public fillEntity(post: IPhotoPost) {
    super.fillEntity(post);
    this.photo = post.photo;
  }
}
