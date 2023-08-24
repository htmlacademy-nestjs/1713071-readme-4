import { IComment } from '@project/shared/app-types';

export class CommentEntity implements IComment {
  public id?: string;
  public userId: string;
  public postId: string
  public creationDate: string
  public text: string;

  constructor(comment: IComment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return {
      id: this.id,
      userId: this.userId,
      postId: this.postId,
      creationDate: this.creationDate,
      text: this.text
    }
  }

  public fillEntity(comment: IComment) {
    this.id = comment.id;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.creationDate = comment.creationDate;
    this.text = comment.text;
  }
}
