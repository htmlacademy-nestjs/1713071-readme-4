import { IComment } from '@project/shared/app-types';

export class CommentEntity implements IComment {
  public id: string;
  public userId: string;
  public postId: string
  public text: string;

  constructor(comment: IComment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return {
      id: this.id,
      userId: this.userId,
      postId: this.postId,
      text: this.text
    }
  }

  public fillEntity(comment: IComment) {
    this.id = comment.id;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.text = comment.text;
  }
}
