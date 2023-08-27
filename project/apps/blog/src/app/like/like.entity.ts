import { ILike } from '@project/shared/app-types';

export class LikeEntity implements ILike {
  userId: string;
  postId: string

  constructor(like: ILike) {
    this.fillEntity(like);
  }

  public toObject() {
    return {
      userId: this.userId,
      postId: this.postId
    }
  }

  public fillEntity(like: ILike) {
    this.userId = like.userId;
    this.postId = like.postId;
  }
}
