import { gql } from 'graphql-request';

import { graphQLClient } from 'core/api';
import { LocationApiResponse } from './location-collection.api-model';

interface GetLocationCollectionResponse {
  locations: LocationApiResponse;
}

export const getLocationCollection = async (page: number, searchText: string): Promise<LocationApiResponse> => {
  const query = gql`
    query ($page: Int!, $searchText: String) {
      locations(page: $page, filter: { name: $searchText }) {
        info {
          pages
        }
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;
  const { locations } = await graphQLClient.request<GetLocationCollectionResponse>(query, { page, searchText });
  return locations;
};
