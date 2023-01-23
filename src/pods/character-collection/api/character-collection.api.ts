import axios from 'axios';

import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get<CharacterEntityApi[]>(url).then(({ data }) => data);
};
