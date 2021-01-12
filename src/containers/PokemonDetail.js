import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import {Container, 
        Text,
        Box,
        Image
} from '@chakra-ui/react'
import Pokeball from '../assets/Pokeball.png';
import {PokemonColors} from "../components/PokemonColors";
import PokemonBall from '../components/PokemonBall'

const GET_POKEMON_DET = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats{
        stat{
          name
        }
        effort
        base_stat
      }
    }
  }
`;


export default function PokemonDetail() {
  const pokename = useParams().name

  const { loading, error, data } = useQuery(GET_POKEMON_DET, {
    variables: {
      name : pokename
    },
  });

  if(!loading && data) console.log(data)
  return (
    <>
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
        <Container maxW="960px" marginBottom="60px">
          <Image
            display="block"
            marginTop="-150px"
            marginRight="auto"
            marginLeft="auto"
            height="250px"
            padding="10px"
            src={data.pokemon.sprites.front_default} 
            fallbackSrc={Pokeball}/> 
          <PokemonBall></PokemonBall>
          <Text
            textAlign="center"
            textTransform="capitalize"
            fontWeight="Bold"
            marginTop="-50px"
            fontSize="32px"
          >{data.pokemon.name}</Text>
        </Container>
      </Box>
    }
    </>
  )
}
