import React from 'react'
import {Box, Flex, Image} from '@chakra-ui/react';
import PokeSquare from "../assets/PokeSquare.png";

export default function PokemonBall() {
  return (
    <Flex
      justify="space-between"
      overflow="hidden"
      position="fixed"
      bottom="0"
      width="100%"
      left="0"
      wrap="wrap"
      padding="1rem 0"
    >
    <Box margin="auto">
      <Flex align="center">
        <Image 
          boxShadow="xl"
          borderRadius="full"
          cursor="pointer"
          src={PokeSquare}
          height="70px"
        ></Image>
      </Flex>
    </Box>
    </Flex>
  )
}

