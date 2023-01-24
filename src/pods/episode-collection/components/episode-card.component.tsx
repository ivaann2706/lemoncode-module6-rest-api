import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';

import { EpisodeEntity } from '../episode-collection.vm';
import * as classes from './episode.styles';

interface Props {
  episode: EpisodeEntity;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;

  return (
    <Card>
      <CardHeader avatar={<Avatar>{episode.id}</Avatar>} title={episode.name} />
      <CardContent>
        <div>
          <span className={classes.label}>Air date:</span>
          {episode.air_date}
        </div>
        <div>
          <span className={classes.label}>Episode:</span>
          {episode.episode}
        </div>
      </CardContent>
    </Card>
  );
};
