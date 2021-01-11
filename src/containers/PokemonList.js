import React, {useState, useEffect} from 'react';
import { Container, Heading} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Pagination from '../components/Pagination';
import Card from '../components/Card'

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
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

function getVariables(urlString){
  var url = new URL(urlString);
  var limit = parseInt(url.searchParams.get("limit"));
  var offset = parseInt(url.searchParams.get("offset"));
  
  console.log(limit +" "+ offset)
  return {limit, offset}
}

export default function PokemonList() {

  const [pokemonList, setPokemonList] = useState([])
  const [currentVariables, setCurrentVariables] = useState({
    limit: 20,
    offset: 1,
  })
  const [nextParams, setnextParams] = useState({})
  const [prevParams, setprevParams] = useState({})
    
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: currentVariables,
  });

  useEffect(() => {
    if(!loading && data){
      setPokemonList(data.pokemons.results.map(pokemon => pokemon));
      setnextParams(getVariables(data.pokemons.next))
      setprevParams(getVariables(data.pokemons.previous))
    }
  }, [loading, data])

  function gotoNextPage() {
    setCurrentVariables(nextParams)
  }

  function gotoPrevPage() {
    setCurrentVariables(prevParams)
  }

  if (error) return `Error! ${error.message}`;
  console.log(data)
  console.log(nextParams)
  console.log(prevParams)
  return (
    <>
      <Container maxW="960px" marginTop="75px" marginBottom="60px">
        {loading 
          ? 'Loading...' 
          : <div>
              <Heading as="h2" color="#2E3131" textAlign="center">Wild Pokemon</Heading>
              <Card pokemonList={pokemonList}></Card>
              <Pagination
                gotoNextPage={nextParams.offset ? gotoNextPage : null}
                gotoPrevPage={prevParams.offset ? gotoPrevPage : null}
              />
            </div>
        }
      </Container>
    </>
  );
}
