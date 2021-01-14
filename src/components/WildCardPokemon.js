import React from "react";
import {Box, 
        Image, 
        Tag, 
        Text, 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pokeball from '../assets/Pokeball.png'
import PokeballG from "../assets/PokeballG.png";
import {useMyPokemonList} from '../context'

export default function Card({ pokemon }){
  const myPokemonList = useMyPokemonList();
  function countOwnPokemon(name) {
    return myPokemonList.filter(x => x.name === name).length
  }
  return (
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
          width="90%"
          display="block"
          margin="auto"
          src={pokemon.image}
          fallbackSrc={PokeballG}/>
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
              {"Owened : "+countOwnPokemon(pokemon.name)}
            </Text>
          </Tag>
        </Box>
      </Box>
    </Link>
  )
}