import React from 'react'
import Pokeball from '../../assets/Pokeball.png'
import PokeballG from "../../assets/PokeballG.png";
import {PokemonColors} from "../PokemonColors";
import {useRemoveMyPokemonList} from '../../context/context'
import { Link } from "react-router-dom";
import {
  Container,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Tag,
  Image,
  useDisclosure,
} from '@chakra-ui/react'

export default function MyPokemonCard({pokemon}) {

  const removeMyPokemon = useRemoveMyPokemonList()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div data-testid="myPokemonCard">
      <Box
        {...outer_box}
        bgColor={PokemonColors[pokemon.type[0]]}
        backgroundImage={"url("+Pokeball+")"}
        key={pokemon.nickName}>
        <Link to={"/detail/" + pokemon.name}>
          <Box>
            <Text {...pokemon_nickname}>
              {pokemon.nickName}
            </Text>
          <Text {...pokemon_name}>
            {"("+pokemon.name+")"}
          </Text>
          <Image {...pokemon_img}
            src={pokemon.img}
            fallbackSrc={PokeballG}/>
          </Box>
        </Link>
        <Box cursor="pointer" onClick={onOpen}>
          <Tag {...tag_release}>
            <Text {...release_text}>
              Release
            </Text>
          </Tag>
        </Box>
        <Drawer placement="top" isOpen={isOpen}>
          <DrawerOverlay heigth='100% !important' />
          <DrawerContent heigth='100% !important'>
            <DrawerBody>
              <Container {...drawer_container}>
                <Container {...drawer_container2}>
                  <Box margin="20px 10px">
                    <>
                      <Text {...confirm_text}>
                        {"Do You Want Release " + pokemon.nickName + "?"}
                      </Text>
                      <Box marginTop="10px">
                        <Button {...confirm_button} colorScheme="teal" onClick={()=>{
                          removeMyPokemon(pokemon.nickName)
                        }}>Yes</Button>
                        <Button {...confirm_button} colorScheme="red" onClick={onClose}>No</Button>
                      </Box>
                    </>
                  </Box>
                </Container>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </div>
  )
}

const outer_box = {
  display:"flex",
  flexDir:"column",
  boxShadow:"base",
  rounded:"md",
  backgroundSize:"80%",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
}

const pokemon_nickname = {
  fontWeight:"bold",
  lineHeight:"tight",
  textTransform:"capitalize",
  textAlign:"center",
  padding:"12px 12px 0px 12px",
  color:"White"
}

const pokemon_name = {
  textAlign:"center",
  color:"white",
  marginTop:"-5px",
  textTransform:"capitalize",
  fontSize:"14px"    
}

const pokemon_img = {
  width:"90%",
  display:"block",
  margin:"auto",
  alt:"Pokemon"
}

const tag_release = {
  width:"100%",
  bgColor:"white",
  borderRadius:"0px 0px 5px 5px"
}

const release_text = {
  width:"100%",
  textAlign:"center",
  fontWeight:"bold",
  lineHeight:"tight",
  textTransform:"capitalize",
  padding:"10px",
  color:"#2E3131"
}

const drawer_container = {
  maxW:"960px",
  paddingLeft:"0px",
  paddingRight:"0px"
}
const drawer_container2 = {
  paddingLeft:"0px",
  paddingRight:"0px", 
  textAlign:"center"
}

const confirm_text = {
  fontSize:"18px",
  fontWeight:"Bold",
  textTransform:"capitalize"
}

const confirm_button = {
  margin:"10px",
  width:"100px"
}
