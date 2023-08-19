import { PostLinkEntity } from './post-link.entity';
import { PostPhotoEntity } from './post-photo.entity';
import { PostQuoteEntity } from './post-quote.entity';
import { PostTextEntity } from './post-text.entity';
import { PostVideoEntity } from './post-video.entity';

export type PostBlogEntity =
  PostLinkEntity
  | PostPhotoEntity
  | PostQuoteEntity
  | PostTextEntity
  | PostVideoEntity;
