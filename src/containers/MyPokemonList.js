import React from 'react'
import {Container, Heading} from '@chakra-ui/react'

export default function MyPokemonList() {
  return (
    <div>
      <Container maxW="960px" marginTop="75px" marginBottom="60px">
        <Heading as="h2" color="#2E3131" textAlign="center">My Pokemon</Heading>
      </Container>
    </div>
  )
}
