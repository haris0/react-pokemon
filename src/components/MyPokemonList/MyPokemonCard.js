import React from 'react'
import Pokeball from '../../assets/Pokeball.png'
import PokeballG from "../../assets/PokeballG.png";
import {PokemonColors} from "../PokemonColors";
import {useRemoveMyPokemonList} from '../../context'
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
          onClick={onOpen}>
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
        <Drawer placement="top" isOpen={isOpen}>
          <DrawerOverlay heigth='100% !important' />
          <DrawerContent heigth='100% !important'>
            <DrawerBody>
              <Container maxW="960px" paddingLeft="0px" paddingRight="0px">
                <Container paddingLeft="0px" paddingRight="0px" textAlign="center">
                  <Box margin="20px 10px">
                    <>
                      <Text
                        fontSize="18px"
                        fontWeight="Bold"
                        textTransform="capitalize">
                        {"Do You Want Release " + pokemon.nickName + "?"}
                      </Text>
                      <Box marginTop="10px">
                        <Button margin="10px" width="100px" colorScheme="teal" onClick={()=>{
                          removeMyPokemon(pokemon.nickName)
                        }}>Yes</Button>
                        <Button margin="10px" width="100px" colorScheme="red" onClick={onClose}>No</Button>
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
