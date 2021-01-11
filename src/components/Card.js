import React from "react";
import {Box, Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ pokemonList }){
  return (
    <Box
      flex="1"
      padding="15px"
      display="flex"
      flexDir="column">
      <Box
        width="100%"
        display="grid"
        gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))"
        gridGap="15px">
        {pokemonList.map(pokemon => (
          <Link to={"/detail/" + pokemon.name}>
            <Box
              display="flex"
              flexDir="column"
              maxHeight="150px"
              padding="15px"
              background="white"
              boxShadow="base" 
              rounded="md"
              cursor="pointer"
              key={pokemon.name}
              >
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                textTransform="capitalize"
                color="#2E3131"
              >
                {pokemon.name}
              </Box>
              <Image
                width="100%"
                src={pokemon.image} />
            </Box>
          </Link>
        ))}
      </Box>
      
    </Box>
  )
}