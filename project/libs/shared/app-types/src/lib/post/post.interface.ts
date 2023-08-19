import { PostType } from './post-type.enum';
import { PostStatus } from './post-status.enum';

export interface IPost {
  id?: string;
  originId?: string
  userId?: string;
  originUserId?: string;
  type: PostType
  status: PostStatus
  tags?: string[];
  isReposted: boolean;
  commentsCount: number
  likesCount: number;
}
