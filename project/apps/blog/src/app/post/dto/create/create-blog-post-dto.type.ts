import { CreatePostLinkDto } from './create-post-link.dto';
import { CreatePostPhotoDto } from './create-post-photo.dto';
import { CreatePostQuoteDto } from './create-post-quote.dto';
import { CreatePostTextDto } from './create-post-text.dto';
import { CreatePostVideoDto } from './create-post-video.dto';

export type TCreateBlogPostDto =
  CreatePostLinkDto
  | CreatePostPhotoDto
  | CreatePostQuoteDto
  | CreatePostTextDto
  | CreatePostVideoDto
