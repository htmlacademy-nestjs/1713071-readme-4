import { ITextPost } from './post-text.interface';
import { IQuotePost } from './post-quote.interface';
import { IVideoPost } from './post-video.interface';
import { IPhotoPost } from './post-photo.interface';
import { ILinkPost } from './post-link.interface';

export type TPostBlog =
  ILinkPost
  | IPhotoPost
  | IQuotePost
  | ITextPost
  | IVideoPost
