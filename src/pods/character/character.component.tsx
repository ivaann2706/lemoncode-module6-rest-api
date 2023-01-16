import React from 'react';

import { IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import CommentIcon from '@material-ui/icons/Comment';

import { Character } from './character.vm';
import * as classes from './character.styles';
import { AddSentencesComponent } from './components/add-sentece.component';

const STATUS = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
};

interface Props {
  character: Character;
  onUpdate: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onUpdate } = props;
  const [adding, setAdding] = React.useState(false);

  const handleAddBestSentence = (sentence: string) => {
    let auxCharacter: Character;
    if (character.bestSentences?.length > 0) {
      auxCharacter = { ...character, bestSentences: [...character.bestSentences, sentence] };
    } else {
      auxCharacter = { ...character, bestSentences: [sentence] };
    }
    onUpdate(auxCharacter);
  };

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
          <span />
        </div>
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

      <div className={classes.bestSentences}>
        <div className={classes.section}>
          <span className={classes.text__gray}>
            Best sentences:
            <IconButton color="primary" onClick={() => setAdding(true)}>
              <AddCircle />
            </IconButton>
          </span>

          {character.bestSentences.length === 0 && <div>No best sentences</div>}

          {character.bestSentences.length > 0 && (
            <List>
              {character.bestSentences.map((sentence, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CommentIcon />
                  </ListItemIcon>
                  <ListItemText primary={sentence} />
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </div>

      {adding && <AddSentencesComponent onAdd={handleAddBestSentence} onClose={() => setAdding(false)} />}
    </div>
  );
};
