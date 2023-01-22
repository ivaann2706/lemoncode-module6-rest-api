import * as React from 'react';

import { Typography } from '@material-ui/core';

import { EpisodeEntity } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import { ListComponent } from 'common/components/list/list.component';

interface Props {
  episodeCollection: EpisodeEntity[];
  page: number;
  setPage: (value: number) => void;
  totalPage: number;
  setSearchText: (value: string) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { episodeCollection, page, setPage, setSearchText, totalPage } = props;

  return (
    <>
      <Typography variant="h3" align="center">
        Episodes
      </Typography>
      <ListComponent page={page} setPage={setPage} totalPage={totalPage} setSearchText={setSearchText}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} />
          </li>
        ))}
      </ListComponent>
    </>
  );
};
