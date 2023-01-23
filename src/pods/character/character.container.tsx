import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { linkRoutes } from 'core/router';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (error) {
      alert('Failed to load the character');
      history.push(linkRoutes.characterCollection);
    }
  };

  const handleUpdateCharacter = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);

    try {
      await api.updateCharacter(apiCharacter);
      setCharacter(character);
    } catch (error) {
      alert('Error on update the best sentences');
    }
  };

  const handleBack = () => {
    history.push(linkRoutes.characterCollection);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return (
    <>
      <IconButton color="primary" onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <CharacterComponent character={character} onUpdate={handleUpdateCharacter} />;
    </>
  );
};
