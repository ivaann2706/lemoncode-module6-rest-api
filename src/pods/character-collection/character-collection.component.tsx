import * as React from 'react';

import { Typography } from '@material-ui/core';

import { CharacterCard } from './components/character-card.component';
import { CharacterEntity } from './character-collection.vm';
import { ListComponent } from 'common/components/list/list.component';

interface Props {
  characterCollection: CharacterEntity[];
  onDetail: (id: string) => void;
  page: number;
  setPage: (value: number) => void;
  totalPage: number;
  setSearchText: (value: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { characterCollection, onDetail, page, setPage, setSearchText, totalPage } = props;

  return (
    <>
      <Typography variant="h3" align="center">
        Characters
      </Typography>
      <ListComponent page={page} setPage={setPage} totalPage={totalPage} setSearchText={setSearchText}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetail} />
          </li>
        ))}
      </ListComponent>
    </>
  );
};
