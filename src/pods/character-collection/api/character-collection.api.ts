import { gql } from 'graphql-request';

import { graphQLClient } from 'core/api';
import { CharacterApiResponse } from './character-collection.api-model';

interface GetCharacterCollectionResponse {
  characters: CharacterApiResponse;
}

export const getCharacterCollection = async (page: number, searchText: string): Promise<CharacterApiResponse> => {
  const query = gql`
    query ($page: Int!, $searchText: String) {
      characters(page: $page, filter: { name: $searchText }) {
        info {
          pages
        }
        results {
          id
          name
          image
          status
          species
          gender
        }
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query, { page, searchText });
  return characters;
};
