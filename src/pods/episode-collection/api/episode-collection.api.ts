import { gql } from 'graphql-request';

import { graphQLClient } from 'core/api';
import { EpisodeApiResponse } from './episode-collection.api-model';

interface GetEpisodeCollectionResponse {
  episodes: EpisodeApiResponse;
}

export const getEpisodeCollection = async (page: number, searchText: string): Promise<EpisodeApiResponse> => {
  const query = gql`
    query ($page: Int!, $searchText: String) {
      episodes(page: $page, filter: { name: $searchText }) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
  const { episodes } = await graphQLClient.request<GetEpisodeCollectionResponse>(query, { page, searchText });
  return episodes;
};
