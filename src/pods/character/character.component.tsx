import React from 'react';

import { Character as Character } from './character.vm';
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
        <div className={classes.detail}>
          <div>
            <div className={classes.status}>
              <span style={{ backgroundColor: STATUS[character.status] }} className={classes.status__icon} />
              {character.status}
            </div>
            <span />
            <div className={classes.section}>
              <span className={classes.text__gray}>Gender:</span>
              {character.gender}
            </div>
            <div className={classes.section}>
              <span className={classes.text__gray}>Species:</span>
              {character.species}
            </div>
            {!!character.type && (
              <div className={classes.section}>
                <span className={classes.text__gray}>Type:</span>
                {character.type}
              </div>
            )}
            <div className={classes.section}>
              <span className={classes.text__gray}>Last known location:</span>
              {character.location.name}
            </div>
            <div className={classes.section}>
              <span className={classes.text__gray}>First seen in:</span>
              {character.origin.name}
            </div>
          </div>
          {character.bestSentences?.length > 0 && (
            <div>
              <div className={classes.section}>
                <span className={classes.text__gray}>Best sentences:</span>
                <ul>
                  {character.bestSentences.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
