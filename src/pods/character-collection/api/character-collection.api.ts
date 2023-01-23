import axios from 'axios';

import { CharacterEntityApi, CharacterEntityApiResponse } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get<CharacterEntityApiResponse>(url).then(({ data }) => data.results);
};
