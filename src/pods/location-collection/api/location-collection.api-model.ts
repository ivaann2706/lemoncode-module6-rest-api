import { LocationEntity } from '../location-collection.vm';

export interface LocationApiResponse {
  info: Info;
  results: LocationEntity[];
}

export interface Info {
  pages: number;
}
