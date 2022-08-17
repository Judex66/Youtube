export interface Video {
  thumbnails:ThumbnailsParams;
  snippet:Snippet;
  statistics:Statistics;
  id: string;
}
export interface InterfaceResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface ThumbnailsParams {
  url: string;
  width: number;
  height: number;
}

export type ThumbnailsOptions = 'default' | 'medium' | 'high' | 'standard' | 'maxres';

export type Thumbnails = Record<ThumbnailsOptions, ThumbnailsParams>;

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
