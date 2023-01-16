import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
import { Character } from '../character.vm';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query ($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  `;
  const { character } = await graphQLClient.request<GetCharacterResponse>(query, {
    id,
  });
  return character;
};
