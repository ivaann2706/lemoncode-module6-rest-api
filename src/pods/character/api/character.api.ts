import axios from 'axios';

import { Character } from './character.api-model';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get<Character>(`${url}/${id}`).then(({ data }) => data);
};

export const updateCharacter = async (character: Character): Promise<void> => {
  await axios.put<Character>(`${url}/${character.id}`, character);
};
