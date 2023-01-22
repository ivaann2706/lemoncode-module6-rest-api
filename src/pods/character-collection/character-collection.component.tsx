import * as React from 'react';

import { Pagination } from '@material-ui/lab';

import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterEntity } from './character-collection.vm';
import { SearchComponent } from 'common/components';

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

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <SearchComponent setPage={setPage} setSearchText={setSearchText} />
      {!!totalPage && (
        <>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
          <ul className={classes.list}>
            {characterCollection.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} onDetail={onDetail} />
              </li>
            ))}
          </ul>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
        </>
      )}
      {!totalPage && <p>Character list not available</p>}
    </div>
  );
};
