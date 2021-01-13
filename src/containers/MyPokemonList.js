import React from 'react'
import {
  Container, 
  Heading,} 
  from '@chakra-ui/react'
import {useMyPokemonList} from '../context'
import MyPokemonCard from '../components/MyPokemonCard'

export default function MyPokemonList() {
  const myPokemonList = useMyPokemonList();
  console.log(myPokemonList)

  return (
    <div>
      <Container maxW="960px" marginTop="75px" marginBottom="60px">
        <Heading as="h2" color="#2E3131" textAlign="center">My Pokemon</Heading>
        <MyPokemonCard myPokemonList={myPokemonList}></MyPokemonCard>
      </Container>
    </div>
  )
}
