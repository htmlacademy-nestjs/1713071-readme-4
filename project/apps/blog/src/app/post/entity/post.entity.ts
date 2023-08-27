import { IPost, PostStatus, PostType } from '@project/shared/app-types';

export class PostEntity implements IPost {
  public id?: string;
  public originId?: string
  public userId: string;
  public originUserId?: string;
  public title?: string;
  public announcement?: string;
  public description?: string
  public text?: string;
  public url?: string;
  public author?: string;
  public photo?: string;
  public tags?: string[];
  public creationDate: string;
  public publicationDate: string;
  public type: PostType
  public status: PostStatus
  public isReposted?: boolean;
  public commentsCount?: number
  public likesCount?: number;

  constructor(post: IPost) {
    this.fillEntity(post);
  }

  public toObject() {
    return {
      id: this.id,
      originId: this.originId,
      userId: this.userId,
      originUserId: this.originUserId,
      title: this.title,
      announcement: this.announcement,
      description: this.description,
      text: this.text,
      url: this.url,
      author: this.author,
      photo: this.photo,
      tags: this.tags,
      creationDate: this.creationDate,
      publicationDate: this.publicationDate,
      type: this.type,
      status: this.status,
      isReposted: this.isReposted,
      commentsCount: this.commentsCount,
      likesCount: this.likesCount
    }
  }

  public fillEntity(post: IPost) {
    this.id = post.id;
    this.originId = post.originId;
    this.userId = post.userId;
    this.originUserId = post.originUserId;
    this.title = post.title;
    this.announcement = post.announcement;
    this.description = post.description;
    this.text = post.text;
    this.url = post.url;
    this.author = post.author;
    this.photo = post.photo;
    this.tags = post.tags || [];
    this.creationDate = post.creationDate;
    this.publicationDate = post.publicationDate;
    this.type = post.type;
    this.status = post.status;
    this.isReposted = post.isReposted || false;
    this.commentsCount = post.commentsCount || 0;
    this.likesCount = post.likesCount || 0;
  }
}
