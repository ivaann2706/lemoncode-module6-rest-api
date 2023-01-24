import React from 'react';

import { Character } from './character.vm';
import * as classes from './character.styles';

const STATUS = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
};

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.detail}>
      <div>
        <img className={classes.img} src={character.image} />
      </div>
      <div>
        <h1>{character.name}</h1>
        <div className={classes.status}>
          <span style={{ backgroundColor: STATUS[character.status] }} className={classes.status__icon} />
          {character.status}
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Gender:</span>
          {character.gender}
        </div>
        <div className={classes.section}>
          <span className={classes.label}>Species:</span>
          {character.species}
        </div>
        {!!character.type && (
          <div className={classes.section}>
            <span className={classes.label}>Type:</span>
            {character.type}
          </div>
        )}
        <div className={classes.section}>
          <span className={classes.label}>Last known location:</span>
          {character.location.name}
        </div>
        <div className={classes.section}>
          <span className={classes.label}>First seen in:</span>
          {character.origin.name}
        </div>
      </div>
    </div>
  );
};
