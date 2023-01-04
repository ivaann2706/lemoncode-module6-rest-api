import axios from 'axios';

import { Character } from './character.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get<Character>(`${url}/${id}`).then(({ data }) => data);
};
