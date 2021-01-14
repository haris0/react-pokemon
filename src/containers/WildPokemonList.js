import React from 'react';
import { Container, Heading} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import MyPokemonButton from '../components/WildPokemonList/MyPokemonButton';
import WildCardPokemon from '../components/WildPokemonList/WildCardPokemon'
import {Box, Skeleton, IconButton, SimpleGrid} from '@chakra-ui/react';
import { ArrowDownIcon} from '@chakra-ui/icons';
import {GET_POKEMONS} from '../queries/queriesList'
import {useMyPokemonList} from '../context'

export default function WildPokemonList() {

  const container_style = {
    maxW:"960px",
    marginTop:"75px",
    marginBottom:"16px"
  }
  const heading_style = {
    as:"h2",
    color:"#2E3131",
    textAlign:"center"
  }

  const grid_style = {
    padding:"15px",
    marginTop:"20px",
    spacing:"20px"
  }

  const icon_style = {
    marginRight:"10px",
    bg:"#23CBA7",
    boxShadow:"base",
    colorScheme:"teal",
    borderRadius:"full",
    width:"50px",
    height:"50px"
  }

  const myPokemonList = useMyPokemonList();
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
        limit: 20,
        offset: 1,
      },
  });

  return (
    <>
      <Container {...container_style}>
        <Heading {...heading_style}>Wild Pokemon</Heading>
        {loading && 
          <SimpleGrid columns={[2, null, 5]} marginTop="30px" spacing="20px">
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
            <SimpleGrid columns={[2, null, 5]} {...grid_style}>
              {data.pokemons.results.map(pokemon => (
                <WildCardPokemon key={pokemon.name} pokemon={pokemon}></WildCardPokemon>
              ))}
              <MyPokemonButton number={myPokemonList.length}/>
            </SimpleGrid>
          </div>
        }
        {!loading &&
          data &&
          <Box textAlign="right">
            <IconButton {...icon_style}
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
