import * as React from 'react';

import { getEpisodeCollection } from './api';
import { EpisodeEntity } from './episode-collection.vm';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntity[]>([]);
  const [totalPage, setTotalPage] = React.useState(0);

  const loadEpisodeCollection = (page: number, searchText: string) => {
    getEpisodeCollection(page, searchText)
      .then((episodes) => {
        setEpisodeCollection(episodes.results);
        setTotalPage(episodes.info.pages);
      })
      .catch(() => alert('Failed to load episode list'));
  };

  return { episodeCollection, loadEpisodeCollection, totalPage };
};
