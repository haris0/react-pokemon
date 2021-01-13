import React from 'react'
import {
  Box,
  Container, 
  Heading,
  Text,
  Image
}from '@chakra-ui/react'
import {useMyPokemonList} from '../context'
import MyPokemonCard from '../components/MyPokemonCard'
import PokeSquare from '../assets/PokeSquare.png'

export default function MyPokemonList() {
  const myPokemonList = useMyPokemonList();
  console.log(myPokemonList)

  return (
    <div>
      <Container maxW="960px" marginTop="75px" marginBottom="60px">
        <Heading as="h2" color="#2E3131" textAlign="center">My Pokemon</Heading>
        {myPokemonList.length>0 &&
          <MyPokemonCard myPokemonList={myPokemonList}></MyPokemonCard>
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
              src={PokeSquare}></Image>
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
