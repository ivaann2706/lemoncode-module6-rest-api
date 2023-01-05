import axios from 'axios';

import { Character } from './character.api-model';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get<Character>(`${url}/${id}`).then(({ data }) => data);
};
