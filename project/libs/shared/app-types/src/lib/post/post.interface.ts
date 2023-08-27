import { PostType } from './post-type.enum';
import { PostStatus } from './post-status.enum';

export interface IPost {
  id?: string;
  originId?: string
  userId: string;
  originUserId?: string;
  title?: string;
  announcement?: string;
  description?: string
  text?: string;
  url?: string;
  author?: string;
  photo?: string;
  tags?: string[];
  creationDate: string,
  publicationDate: string,
  type: PostType
  status: PostStatus
  isReposted?: boolean;
  commentsCount?: number
  likesCount?: number;
}
