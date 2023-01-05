export interface CharacterEntityApiResponse {
  info: Info;
  results: CharacterEntityApi[];
}

export interface CharacterEntityApi {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  bestSentences: string[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
