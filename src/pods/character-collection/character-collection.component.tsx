import * as React from 'react';

import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterEntity } from './character-collection.vm';

interface Props {
  characterCollection: CharacterEntity[];
  onDetail: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { characterCollection, onDetail } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetail} />
          </li>
        ))}
      </ul>
    </div>
  );
};
