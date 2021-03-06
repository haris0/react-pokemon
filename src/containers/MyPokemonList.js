import React, { useEffect, lazy} from 'react'
import {
  Box,
  Container, 
  Heading,
  Text,
  Image,
  SimpleGrid
}from '@chakra-ui/react'
import {useMyPokemonList} from '../context/context'
import PokeballG from '../assets/PokeballG.png'

const MyPokemonCard = lazy(()=> import('../components/MyPokemonList/MyPokemonCard'));

export default function MyPokemonList() {

  const myPokemonList = useMyPokemonList();

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList));
    window.scrollTo(0, 0)
  }, [myPokemonList]);

  return (
    <div>
      <Container {...container_style}>
        <Heading {...heading_style}>My Pokemon</Heading>
        {myPokemonList.length>0 &&
          <SimpleGrid columns={[2, null, 5]} {...grid_style}>
            {myPokemonList.map(pokemon => (
              <MyPokemonCard key={pokemon.nickName} pokemon={pokemon}></MyPokemonCard>
            ))}
          </SimpleGrid>
        }
        {myPokemonList.length<=0 &&
          <>
          <Box textAlign="center" marginTop="30px">
            <Text {...no_pokemon_text}> You Don't Have any Pokemon!
            <Image {...no_pokemon_img} src={PokeballG}></Image>
            </Text>
            <Text fontWeight="bold"> Let's catch the Wild Pokemon!</Text>
          </Box>
          </>
        }
      </Container>
    </div>
  )
}

const container_style = {
  maxW:"960px",
  marginTop:"85px",
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

const no_pokemon_text = {
  fontSize:"40px",
  color:"lightgray",
  lineHeight:"50px",
  fontWeight:"Bold",
}

const no_pokemon_img = {
  maxW:"240px",
  padding:"50px",
  display:"block",
  margin:"auto",
  alt:"No Pokemon"
}
