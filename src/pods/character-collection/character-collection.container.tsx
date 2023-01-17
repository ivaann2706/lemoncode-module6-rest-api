import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [page, setPage] = React.useState(1);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(page);
  }, [page]);

  const handleDetail = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetail={handleDetail}
      page={page}
      setPage={setPage}
    />
  );
};
