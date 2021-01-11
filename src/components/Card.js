import React from "react";
import {Box, Heading, Image, Text, Link} from "@chakra-ui/react";

export default function Card({ pokemon }){
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
        {pokemon.map(p => (
          <Box
            display="flex"
            flexDir="column"
            maxHeight="150px"
            padding="15px"
            background="white"
            boxShadow="base" 
            rounded="md"
            cursor="pointer"
            key={p.name}
            >
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              textTransform="capitalize"
            >
              {p.name}
            </Box>
            <Image
              width="100%"
              src={p.image} />
          </Box>
        ))}
      </Box>
      
    </Box>
  )
}