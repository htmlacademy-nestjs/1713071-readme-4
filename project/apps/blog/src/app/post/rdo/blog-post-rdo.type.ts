import { PostLinkRdo } from './post-link.rdo';
import { PostPhotoRdo } from './post-photo.rdo';
import { PostQuoteRdo } from './post-quote.rdo';
import { PostTextRdo } from './post-text.rdo';
import { PostVideoRdo } from './post-video.rdo';

export type TBlogPostRdo =
  PostLinkRdo
  | PostPhotoRdo
  | PostQuoteRdo
  | PostTextRdo
  | PostVideoRdo
