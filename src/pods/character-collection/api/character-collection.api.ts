import { gql } from 'graphql-request';

import { graphQLClient } from 'core/api';
import { CharacterEntityResponse } from './character-collection.api-model';
import { CharacterEntity } from '../character-collection.vm';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityResponse;
}

export const getCharacterCollection = async (page: number): Promise<CharacterEntity[]> => {
  const query = gql`
    query ($page: Int!) {
      characters(page: $page) {
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
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query, { page });
  return characters.results;
};
