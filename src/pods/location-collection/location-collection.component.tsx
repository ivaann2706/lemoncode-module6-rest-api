import * as React from 'react';

import { Pagination } from '@material-ui/lab';

import { LocationEntity } from './location-collection.vm';
import * as classes from './location-collection.styles';
import { LocationCard } from './components/location-card.component';
import { SearchComponent } from 'common/components';

interface Props {
  locationCollection: LocationEntity[];
  page: number;
  setPage: (value: number) => void;
  totalPage: number;
  setSearchText: (value: string) => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { locationCollection, page, setPage, setSearchText, totalPage } = props;

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <SearchComponent setPage={setPage} setSearchText={setSearchText} />
      {!!totalPage && (
        <>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
          <ul className={classes.list}>
            {locationCollection.map((location) => (
              <li key={location.id}>
                <LocationCard location={location} />
              </li>
            ))}
          </ul>
          <Pagination className={classes.pagination} count={totalPage} page={page} onChange={handleChangePage} />
        </>
      )}
      {!totalPage && <p>Location list not available</p>}
    </div>
  );
};
