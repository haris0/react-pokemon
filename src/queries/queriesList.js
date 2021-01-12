import { gql } from '@apollo/client';

export const GET_POKEMON_DET = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats{
        stat{
          name
        }
        effort
        base_stat
      }
    }
  }
`;

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;