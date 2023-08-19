import { UpdatePostLinkDto } from './update-post-link.dto';
import { UpdatePostPhotoDto } from './update-post-photo.dto';
import { UpdatePostQuoteDto } from './update-post-quote.dto';
import { UpdatePostTextDto } from './update-post-text.dto';
import { UpdatePostVideoDto } from './update-post-video.dto';

export type TUpdateBlogPostDto =
  UpdatePostLinkDto
  | UpdatePostPhotoDto
  | UpdatePostQuoteDto
  | UpdatePostTextDto
  | UpdatePostVideoDto
