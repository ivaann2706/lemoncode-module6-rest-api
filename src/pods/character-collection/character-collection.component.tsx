import * as React from 'react';

import { Pagination } from '@material-ui/lab';

import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterEntity } from './character-collection.vm';

interface Props {
  characterCollection: CharacterEntity[];
  onDetail: (id: string) => void;
  page: number;
  setPage: (value: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { characterCollection, onDetail, page, setPage } = props;

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination className={classes.pagination} count={42} page={page} onChange={handleChangePage} />

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetail} />
          </li>
        ))}
      </ul>

      <Pagination className={classes.pagination} count={42} page={page} onChange={handleChangePage} />
    </div>
  );
};
