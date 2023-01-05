import axios from 'axios';

import { CharacterEntityApi, CharacterEntityApiResponse } from './character-collection.api-model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get<CharacterEntityApi[]>(url).then(({ data }) => data);
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // TODO work in progress
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
