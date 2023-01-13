import * as React from 'react';

import * as classes from '../character.styles';

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CommentIcon from '@material-ui/icons/Comment';
import AddCircle from '@material-ui/icons/AddCircle';

import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';

interface Props {
  bestSentences: string[];
}

export const BestSentencesComponent: React.FunctionComponent<Props> = (props) => {
  const { bestSentences } = props;
  const [editing, setEditing] = React.useState(false);

  return (
    <div className={classes.bestSentences}>
      <div className={classes.section}>
        <span className={classes.text__gray}>
          Best sentences:
          {editing ? (
            <IconButton color="primary" onClick={() => setEditing(false)}>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={() => setEditing(true)}>
              <EditIcon />
            </IconButton>
          )}
        </span>

        {!editing && (
          <List>
            {bestSentences.map((sentence, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary={sentence} />
              </ListItem>
            ))}
          </List>
        )}

        {editing && (
          <List>
            <ListItem className={classes.new__sentence} key="new_sentence">
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <TextField id="outlined-basic" label="New Best Sentence" variant="outlined" />
              <Button color="primary" variant="contained" startIcon={<AddCircle />}>
                Add
              </Button>
            </ListItem>

            {bestSentences.map((sentence, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <TextField id="outlined-basic" variant="outlined" value={sentence} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};
