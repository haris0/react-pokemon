import React, {useState, useEffect} from 'react';
import { Container} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Pagination from '../components/Pagination';

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
  const [nextVariables, setNextVariables] = useState({})
  const [prevVariables, setPrevVariables] = useState({})
    
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: currentVariables,
  });

  useEffect(() => {
    if(!loading && data){
      setPokemonList(data.pokemons.results.map(pokemon => pokemon));
      setNextVariables(getVariables(data.pokemons.next))
      setPrevVariables(getVariables(data.pokemons.previous))
    }
  }, [loading, data])

  function gotoNextPage() {
    setCurrentVariables(nextVariables)
  }

  function gotoPrevPage() {
    setCurrentVariables(prevVariables)
  }

  if (error) return `Error! ${error.message}`;
  console.log(data)
  console.log(nextVariables)
  console.log(prevVariables)
  return (
    <>
      <Container maxW="960px" marginTop="75px" marginBottom="100px">
        {loading 
          ? 'Loading...' 
          : <div p="6">
              {pokemonList.map(p => (
                <div key={p.name}>{p.name}</div>
              ))}
              <Pagination
                gotoNextPage={nextVariables.offset ? gotoNextPage : null}
                gotoPrevPage={prevVariables.offset ? gotoPrevPage : null}
              />
            </div>
        }
      </Container>
    </>
  );
}
