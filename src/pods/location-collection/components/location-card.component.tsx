import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';

import { LocationEntity } from '../location-collection.vm';
import * as classes from './location.styles';

interface Props {
  location: LocationEntity;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Card>
      <CardHeader avatar={<Avatar>{location.id}</Avatar>} title={location.name} />
      <CardContent>
        <div>
          <span className={classes.label}>Type:</span>
          {location.type}
        </div>
        <div>
          <span className={classes.label}>Dimension:</span>
          {location.dimension}
        </div>
      </CardContent>
    </Card>
  );
};
