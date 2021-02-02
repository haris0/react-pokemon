import React from 'react'
import {Box, Button, Flex, Image} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Pokeball from '../../assets/Pokeball.png'

export default function MyPokemonButton({number}) {
  return (
    <Flex {...footer_flex}>
    <Box margin="auto">
      <Flex align="center">
        <Link to="/mypokemon">
          <Button {...pokemon_button}
            leftIcon={<Image alt="Poke Ball" src={Pokeball} height="23px" width="23px"/>}>
            My Pokemon
            <Box {...count_box}>
              {number}
            </Box>
          </Button>
        </Link>
      </Flex>
    </Box>
    </Flex>
  )
}

const footer_flex = {
  justify:"space-between",
  overflow:"hidden",
  position:"fixed",
  bottom:"0",
  width:"100%",
  left:"0",
  wrap:"wrap",
  padding:"1rem 0"
}

const pokemon_button = {
  bg:"#23CBA7",
  boxShadow:"base",
  colorScheme:"teal",
  borderRadius:"full",
  height: "unset",
  padding: "13px 16px"
}

const count_box = {
  marginLeft:"10px",
  lineHeight:"23px",
  width:"25px",
  height:"25px",
  bgColor:"#2E3131",
  borderRadius:"full"
}
