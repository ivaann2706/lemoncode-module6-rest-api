import * as React from 'react';

import { EpisodeCollectionComponent } from './episode-collection.component';
import { useEpisodeCollection } from './episode-collection.hook';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection, totalPage } = useEpisodeCollection();
  const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    loadEpisodeCollection(page, searchText);
  }, [page, searchText]);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
      setSearchText={setSearchText}
    />
  );
};
