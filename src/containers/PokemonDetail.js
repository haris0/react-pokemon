import React, {useState, useEffect} from 'react'
import {Container} from '@chakra-ui/react'
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  let { name } = useParams();
  const [pokeName, setPokeName] = useState(name)

  return (
    <Container maxW="960px" marginTop="75px" marginBottom="60px">
      Detail Page {pokeName}
    </Container>
  )
}
