import { CharacterEntity } from '../character-collection.vm';

export interface CharacterApiResponse {
  info: Info;
  results: CharacterEntity[];
}

export interface Info {
  pages: number;
}
