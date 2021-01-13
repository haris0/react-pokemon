import React, { useEffect } from 'react'
import {
  Box,
  Container, 
  Heading,
  Text,
  Image,
  SimpleGrid
}from '@chakra-ui/react'
import {useMyPokemonList} from '../context'
import MyPokemonCard from '../components/MyPokemonCard'
import PokeballG from '../assets/PokeballG.png'

export default function MyPokemonList() {
  const myPokemonList = useMyPokemonList();
  console.log(myPokemonList)

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList));
  }, [myPokemonList]);

  return (
    <div>
      <Container maxW="960px" marginTop="75px" marginBottom="60px">
        <Heading as="h2" color="#2E3131" textAlign="center">My Pokemon</Heading>
        {myPokemonList.length>0 &&
          <SimpleGrid columns={[1, null, 5]} padding="15px" marginTop="20px" spacing="20px">
            {myPokemonList.map(pokemon => (
              <MyPokemonCard pokemon={pokemon}></MyPokemonCard>
            ))}
          </SimpleGrid>
        }
        {myPokemonList.length<=0 &&
          <>
          <Box textAlign="center" marginTop="30px">
            <Text
              fontSize="40px"
              color="lightgray"
              lineHeight="50px"
              fontWeight="Bold"
            > You Don't Have any Pokemon!
            <Image 
              maxW="240px"
              padding="50px" 
              display="block"
              margin="auto"
              src={PokeballG}></Image>
            </Text>
            <Text 
              fontWeight="bold"
            > Let's catch the Wild Pokemon!</Text>
          </Box>
          </>
        }
      </Container>
    </div>
  )
}
