import * as React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

interface Props {
  onAdd: (sentence: string) => void;
  onClose: () => void;
}

export const AddSentencesComponent: React.FunctionComponent<Props> = (props) => {
  const { onAdd, onClose } = props;
  const [newSentence, setNewSentence] = React.useState('');

  const handleAdd = () => {
    onAdd(newSentence);
    onClose();
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Add a new Best Sentence</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="New Best Sentence"
          type="text"
          fullWidth
          value={newSentence}
          onChange={(e) => setNewSentence(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
