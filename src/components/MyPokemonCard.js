import React from 'react'
import {
  Box, 
  Image, 
  Tag, 
  Text} 
  from '@chakra-ui/react'
import Pokeball from '../assets/Pokeball.png'
import PokeSquare from "../assets/PokeSquare.png";
import {PokemonColors} from "../components/PokemonColors";

export default function MyPokemonCard({myPokemonList}) {
  return (
    <div>
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
            {myPokemonList.map(pokemon => (
              <Box
                display="flex"
                flexDir="column"
                boxShadow="base" 
                rounded="md"
                bgColor={PokemonColors[pokemon.type[0]]}
                backgroundImage={"url("+Pokeball+")"}
                backgroundSize="80%"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                key={pokemon.nickName}
                >
                <Text 
                  fontWeight="bold" 
                  lineHeight="tight"
                  textTransform="capitalize"
                  textAlign="center"
                  padding="12px 12px 0px 12px"
                  color="White">
                  {pokemon.nickName}
                </Text>
                <Text 
                  textAlign="center"
                  color="white"
                  marginTop="-5px"
                  textTransform="capitalize"
                  fontSize="14px">
                  {"("+pokemon.name+")"}
                </Text>
                <Image
                  width="90%"
                  display="block"
                  margin="auto"
                  src={pokemon.img}
                  fallbackSrc={PokeSquare}/>
                <Box 
                  cursor="pointer">
                  <Tag width="100%" bgColor="white" borderRadius="0px 0px 5px 5px">
                    <Text
                      width="100%"
                      textAlign="center"
                      fontWeight="bold" 
                      lineHeight="tight"
                      textTransform="capitalize"
                      padding="10px"
                      color="#2E3131">
                      Release
                    </Text>
                  </Tag>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
    </div>
  )
}
