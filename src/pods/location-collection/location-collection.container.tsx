import * as React from 'react';

import { LocationCollectionComponent } from './location-collection.component';
import { useLocationCollection } from './location-collection.hook';

export const LocationCollectionContainer = () => {
  const { locationCollection, loadLocationCollection, totalPage } = useLocationCollection();
  const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    loadLocationCollection(page, searchText);
  }, [page, searchText]);

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
      setSearchText={setSearchText}
    />
  );
};
