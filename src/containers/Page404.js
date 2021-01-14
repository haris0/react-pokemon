import React from 'react'
import {
  Box,
  Text,
  Image,
}from '@chakra-ui/react'
import error404 from '../assets/error404.png'

export default function Page404() {
  return (
    <div>
      <Box textAlign="center" marginTop="85px">
        <Text {...no_pokemon_text}> Page Not found !
        <Image {...no_pokemon_img} src={error404}></Image>
        </Text>
      </Box>
    </div>
  )
}

const no_pokemon_text = {
  fontSize:"40px",
  color:"lightgray",
  lineHeight:"50px",
  fontWeight:"Bold",
}

const no_pokemon_img = {
  maxW:"240px",
  padding:"50px",
  display:"block",
  margin:"auto",
}
