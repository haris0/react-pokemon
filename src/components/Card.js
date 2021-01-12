import React from "react";
import {Box, Image, Tag, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pokeball from '../assets/Pokeball.png'

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
          <Link to={"/detail/" + pokemon.name} key={pokemon.name}>
            <Box
              display="flex"
              flexDir="column"
              boxShadow="base" 
              rounded="md"
              cursor="pointer"
              bgColor="lightgray"
              backgroundImage={"url("+Pokeball+")"}
              backgroundSize="80%"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              >
              <Text 
                fontWeight="bold" 
                lineHeight="tight"
                textTransform="capitalize"
                textAlign="center"
                padding="12px 12px 0px 12px"
                color="White">
                {pokemon.name}
              </Text>
              <Image
                width="100%"
                padding="25px"
                src={pokemon.image} />
              <Box>
                <Tag width="100%" bgColor="white" borderRadius="0px 0px 5px 5px">
                  <Text
                    width="100%"
                    textAlign="center"
                    fontWeight="bold" 
                    lineHeight="tight"
                    textTransform="capitalize"
                    padding="10px"
                    color="#2E3131">
                    Owened : 0
                  </Text>
                </Tag>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
      
    </Box>
  )
}