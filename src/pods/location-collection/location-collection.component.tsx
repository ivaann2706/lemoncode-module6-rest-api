import * as React from 'react';

import { Typography } from '@material-ui/core';

import { LocationEntity } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import { ListComponent } from 'common/components/list/list.component';

interface Props {
  locationCollection: LocationEntity[];
  page: number;
  setPage: (value: number) => void;
  totalPage: number;
  setSearchText: (value: string) => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { locationCollection, page, setPage, setSearchText, totalPage } = props;

  return (
    <>
      <Typography variant="h3" align="center">
        Locations
      </Typography>
      <ListComponent page={page} setPage={setPage} totalPage={totalPage} setSearchText={setSearchText}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location} />
          </li>
        ))}
      </ListComponent>
    </>
  );
};