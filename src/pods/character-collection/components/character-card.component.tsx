import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { CharacterEntityVm } from '../character-collection.vm';
import { StatusComponent } from './status.component';

interface Props {
  character: CharacterEntityVm;
  onDetail: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader
        avatar={<StatusComponent status={character.status} />}
        title={character.name}
        subheader={character.species + ' - ' + character.gender}
      />
      <CardContent>
        <CardMedia image={character.image} style={{ height: 0, paddingTop: '56.25%' }} />
      </CardContent>
      <CardActions>
        <IconButton color="primary" onClick={() => onDetail(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
