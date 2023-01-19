import * as React from 'react';
import { getCharacterCollection } from './api';
import { CharacterEntity } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntity[]>([]);
  const [totalPage, setTotalPage] = React.useState(0);

  const loadCharacterCollection = (page: number, searchText: string) => {
    getCharacterCollection(page, searchText)
      .then((characters) => {
        setCharacterCollection(characters.results);
        setTotalPage(characters.info.pages);
      })
      .catch(() => alert('Failed to load character list'));
  };

  return { characterCollection, loadCharacterCollection, totalPage };
};
