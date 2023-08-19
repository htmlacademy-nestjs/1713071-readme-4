import { IPost, PostStatus, PostType } from '@project/shared/app-types';
import { DEFAULT_COUNT_COUNT, DEFAULT_ID, DEFAULT_REPOSTED_STATUS, DEFAULT_USER } from '../post.constant';

export class PostEntity implements IPost {
  public id: string;
  public originId: string
  public userId: string;
  public originUserId: string;
  public type: PostType
  public status: PostStatus
  public tags?: string[];
  public isReposted: boolean;
  public commentsCount: number
  public likesCount: number;

  constructor(post: IPost) {
    this.fillEntity(post);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(post: IPost) {
    this.id = post.id;
    this.originId = post.originId || DEFAULT_ID;
    this.userId = post.userId;
    this.originUserId = post.originUserId || DEFAULT_USER;
    this.type = post.type;
    this.status = post.status;
    this.tags = post.tags;
    this.isReposted = post.isReposted || DEFAULT_REPOSTED_STATUS;
    this.commentsCount = post.commentsCount || DEFAULT_COUNT_COUNT;
    this.likesCount = post.likesCount || DEFAULT_COUNT_COUNT;
  }
}
