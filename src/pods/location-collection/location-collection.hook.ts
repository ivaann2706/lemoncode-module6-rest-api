import * as React from 'react';

import { getLocationCollection } from './api';
import { LocationEntity } from './location-collection.vm';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntity[]>([]);
  const [totalPage, setTotalPage] = React.useState(0);

  const loadLocationCollection = (page: number, searchText: string) => {
    getLocationCollection(page, searchText)
      .then((locations) => {
        setLocationCollection(locations.results);
        setTotalPage(locations.info.pages);
      })
      .catch(() => alert('Failed to load location list'));
  };

  return { locationCollection, loadLocationCollection, totalPage };
};
