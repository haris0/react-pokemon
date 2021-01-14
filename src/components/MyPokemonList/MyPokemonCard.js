import React from 'react'
import {
  Box, 
  Image, 
  Tag, 
  Text,
} from '@chakra-ui/react'
import Pokeball from '../../assets/Pokeball.png'
import PokeballG from "../../assets/PokeballG.png";
import {PokemonColors} from "../PokemonColors";
import {useRemoveMyPokemonList} from '../../context'

export default function MyPokemonCard({pokemon}) {
  const removeMyPokemon = useRemoveMyPokemonList()

  return (
    <div>
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
          fallbackSrc={PokeballG}/>
        <Box 
          cursor="pointer"
          onClick={()=>{
            removeMyPokemon(pokemon.nickName)
          }}>
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
    </div>
  )
}
