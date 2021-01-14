import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import Pokeball from '../assets/Pokeball.png';
import MovesTable from "../components/PokemonDetail/MovesTable";
import StatList from '../components/PokemonDetail/StatList'
import WeightHeight from '../components/PokemonDetail/WeightHeight'
import TypeList from '../components/PokemonDetail/TypeList'
import CatchingDrawer from "../components/PokemonDetail/CatchingDrawer";
import {PokemonColors} from "../components/PokemonColors";
import {GET_POKEMON_DET} from '../queries/queriesList'
import {
  Container, 
  Text,
  Box,
  Image,
  Skeleton,
  SkeletonText
} from '@chakra-ui/react'
import {useCountOwnPokemon} from '../context/context';

const box_header = {
  marginTop:"57px",
  right:"0",
  width:"100%",
  height:"150px",
  backgroundSize:"160px",
  backgroundPosition:"right",
  backgroundRepeat:"no-repeat"
}

const pokemon_img = {
  display:"block",
  marginTop:"-150px",
  marginRight:"auto",
  marginLeft:"auto",
  height:"250px",
  padding:"10px",
}
const pokemon_name = {
  textAlign:"center",
  textTransform:"capitalize",
  fontWeight:"Bold",
  marginTop:"-50px",
  fontSize:"32px",
}

const section_text = {
  fontWeight:"Bold",
  fontSize:"24px",
  margin:"20px 5px 5px"
}

const count_text = {
  textAlign:"center",
  marginTop:"15px",
  fontWeight:"700"
}

const container1 = {
  maxW:"960px",
  marginBottom:"100px"
}
const container2 = {
  paddingLeft:"0px",
  paddingRight:"0px",
}

export default function PokemonDetail() {

  const pokename = useParams().name
  const contextCount = useCountOwnPokemon(pokename);
  const [count, setCount] = useState()

  useEffect(()=>{
    setCount(contextCount)
    window.scrollTo(0, 0)
  },[contextCount])

  const { loading, error, data } = useQuery(GET_POKEMON_DET, {
    variables: {
      name : pokename
    },
  });

  if(!loading && data) console.log(data)
  return (
    <>
    {error && "Error Load Data"}
    {loading && !data &&
      <Container {...container1} marginTop="85px">
        <Container>
          <Skeleton height="100px" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Container>
      </Container>
    }
    {!loading && data &&
    <div>
      <CatchingDrawer data={data}></CatchingDrawer>
    </div>
    }
    {!loading && data &&
      <Box>
        <Box
          {...box_header}
          bgColor={PokemonColors[data.pokemon.types[0].type.name]}
          backgroundImage={"url("+Pokeball+")"}/>
        <Container {...container1}>
          <Image
            {...pokemon_img}
            src={data.pokemon.sprites.front_default} 
            fallbackSrc={Pokeball}/> 
          <Text {...pokemon_name}>
            {data.pokemon.name}
          </Text>
          <TypeList typeList={data.pokemon.types}></TypeList>
          <Container {...container2}>
            <WeightHeight 
              height={data.pokemon.height} 
              weight={data.pokemon.weight}>
            </WeightHeight>
            <Text {...count_text}> {"Owned : "+count} </Text>
            <Text {...section_text}> Stats </Text>
            <StatList statList={data.pokemon.stats}></StatList>
            <Text {...section_text}> Moves </Text>
            <MovesTable movesList={data.pokemon.moves}></MovesTable>
          </Container>
        </Container>
      </Box>
    }
    </>
  )
}
