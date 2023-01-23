import * as React from 'react';
import { getCharacterCollection } from './api';
import { CharacterEntity } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntity[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection()
      .then((characters) => setCharacterCollection(characters))
      .catch(() => alert('Failed to load character list'));
  };

  return { characterCollection, loadCharacterCollection };
};
