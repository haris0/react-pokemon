import React from 'react';
import { Container, Heading} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import MyListButton from '../components/MyListButton';
import WildCardPokemon from '../components/WildCardPokemon'
import {Box, Skeleton, IconButton, SimpleGrid} from '@chakra-ui/react';
import { ArrowDownIcon} from '@chakra-ui/icons';
import {GET_POKEMONS} from '../queries/queriesList'

export default function PokemonList() {
    
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
        limit: 20,
        offset: 1,
      },
  });

  return (
    <>
      <Container maxW="960px" marginTop="75px" marginBottom="15px">
        <Heading as="h2" color="#2E3131" textAlign="center">Wild Pokemon</Heading>
        {loading && 
          <SimpleGrid columns={[1, null, 5]} marginTop="30px" spacing="20px">
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </SimpleGrid>
        }
        {error && "Error Load Data"}
        {!loading && data &&
          <div>
            <WildCardPokemon pokemonList={data.pokemons.results}></WildCardPokemon>
            <MyListButton/>
          </div>
        }
        {!loading &&
          data &&
          <Box textAlign="right">
            <IconButton
            marginRight="10px" 
            bg="#23CBA7" 
            boxShadow="base" 
            colorScheme="teal"
            borderRadius="full"
            width="50px"
            height="50px"
            icon={<ArrowDownIcon w={6} h={6}/>}
            onClick={()=>{
              fetchMore({
                variables: { 
                  limit: 20,
                  offset: data.pokemons.nextOffset,
                 },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  console.log(previousResult)
                  console.log(fetchMoreResult)
                  fetchMoreResult.pokemons.results = [
                    ...previousResult.pokemons.results,
                    ...fetchMoreResult.pokemons.results
                  ];
                  return fetchMoreResult;
                },
              })
            }}/>
          </Box>
          }
      </Container>
    </>
  );
}
