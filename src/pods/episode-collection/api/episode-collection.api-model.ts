import { EpisodeEntity } from '../episode-collection.vm';

export interface EpisodeApiResponse {
  info: Info;
  results: EpisodeEntity[];
}

export interface Info {
  pages: number;
}
