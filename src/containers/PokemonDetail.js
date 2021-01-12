import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import Pokeball from '../assets/Pokeball.png';
import PokemonBall from '../components/PokemonBall'
import MovesTable from "../components/MovesTable";
import StatList from '../components/StatList'
import WeightHeight from '../components/WeightHeight'
import TypeList from '../components/TypeList'
import {PokemonColors} from "../components/PokemonColors";
import {GET_POKEMON_DET} from '../queries/queriesList'
import {
  Container, 
  Text,
  Box,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'

export default function PokemonDetail() {
  const pokename = useParams().name

  const { loading, error, data } = useQuery(GET_POKEMON_DET, {
    variables: {
      name : pokename
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure()

  if(!loading && data) console.log(data)
  return (
    <>
    <Box onClick={onOpen}>
      <PokemonBall></PokemonBall>
    </Box>
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay heigth='100% !important' />
      <DrawerContent heigth='100% !important'>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    {error && "Error Load Data"}
    {!loading && data &&
      <Box>
        <Box
          marginTop="57px"
          right="0"
          width="100%"
          height="150px"
          bgColor={PokemonColors[data.pokemon.types[0].type.name]}
          backgroundImage={"url("+Pokeball+")"}
          backgroundSize="160px"
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
        ></Box>
        <Container maxW="960px" marginBottom="100px">
          <Image
            display="block"
            marginTop="-150px"
            marginRight="auto"
            marginLeft="auto"
            height="250px"
            padding="10px"
            src={data.pokemon.sprites.front_default} 
            fallbackSrc={Pokeball}/> 
          <Text
            textAlign="center"
            textTransform="capitalize"
            fontWeight="Bold"
            marginTop="-50px"
            fontSize="32px"
          >{data.pokemon.name}</Text>
          <TypeList typeList={data.pokemon.types}></TypeList>
          <Container paddingLeft="0px" paddingRight="0px">
            <WeightHeight 
              height={data.pokemon.height} 
              weight={data.pokemon.weight}>
            </WeightHeight>
            <Text 
              fontWeight="Bold"
              fontSize="24px"
              margin="20px 5px 5px">
              Stats
            </Text>
            <StatList statList={data.pokemon.stats}></StatList>
            <Text 
              fontWeight="Bold"
              fontSize="24px"
              margin="20px 5px 5px"
            >
              Moves
            </Text>
            <MovesTable movesList={data.pokemon.moves}></MovesTable>
          </Container>
        </Container>
      </Box>
    }
    </>
  )
}
