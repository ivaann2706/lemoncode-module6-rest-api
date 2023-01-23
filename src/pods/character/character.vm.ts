export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { url: string; name: string };
  location: { url: string; name: string };
  image: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: { url: '', name: '' },
  location: { url: '', name: '' },
  image: '',
  bestSentences: [],
});
