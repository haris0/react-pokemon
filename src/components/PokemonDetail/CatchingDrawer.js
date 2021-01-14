import React, { useEffect, useState } from 'react'
import {
  Container,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  CircularProgress,
  Button,
  FormControl,
  Input,
  FormLabel,
  useToast,
  FormHelperText,
  useDisclosure,
  Flex,
  Image
} from '@chakra-ui/react'
import { useAddMyPokemonList, useMyPokemonList } from '../../context/context';
import PokeballG from "../../assets/PokeballG.png";

function getRandomItem() {
  const arr = [1, 0]
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

export default function CatchingDrawer({ data }) {

  const flex_button = {
    justify:"space-between",
    overflow:"hidden",
    position:"fixed",
    bottom:"0",
    width:"100%",
    left:"0",
    wrap:"wrap",
    padding:"1rem 0"
  }

  const img_button = {
    boxShadow:"xl",
    borderRadius:"full",
    bgColor:"white",
    cursor:"pointer",
    height:"60px"
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

  const message_text = {
    fontSize:"18px",
    fontWeight:"Bold",
    textTransform:"capitalize"
  }

  const yes_button = {
    margin:"10px",
    width:"100px",
    colorScheme:"teal"
  }

  const no_button = {
    margin:"20px 10px",
    width:"100px",
    colorScheme:"red"
  }

  const [catching, setCatching] = useState(false);
  const [firsTry, setFirsTry] = useState(true);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickNaem] = useState("")
  const [nickNameError, setNickNameError] = useState(false)
  const [nickNameMsg, setNickNameMsg] = useState("")
  const handleChange = (event) => setNickNaem(event.target.value)

  const myPokemonList = useMyPokemonList();
  const addMyPokemon = useAddMyPokemonList()

  async function catchingPokemon() {
    setCatching(true)
    setTimeout(function () {
      setCatching(false)
      setFirsTry(false)
      setSuccess(!!getRandomItem())
    }, 3000)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  function setDefault() {
    setFirsTry(true)
    setSuccess(false)
    setNickNaem("")
    setNickNameError(false)
    setNickNameMsg("")
  }

  function closeCatching() {
    onClose()
    setDefault()
  }

  function setFalseNickName() {
    setNickNameError(false)
  }

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList));
  }, [myPokemonList]);

  function saveToast() {
    toast({
      position: "top",
      title: nickName + " Saved",
      status: "success",
      duration: 3000,
    })
  }

  function generateCaught() {
    const pekemonCaught = {
      nickName: nickName,
      name: data.pokemon.name,
      img: data.pokemon.sprites.front_default,
      type: data.pokemon.types.map(type => (type.type.name))
    }
    return pekemonCaught
  }

  function isNickNameExist(nickName) {
    return (myPokemonList.some(el => el.nickName === nickName))
  }

  const toast = useToast()
  function savePokemon() {
    if (nickName === "") {
      setNickNameError(true)
      setNickNameMsg("Nickname must be filled")
    } else if(isNickNameExist(nickName)){
      setNickNameError(true)
      setNickNameMsg("Nickname must be Unique")
    }else{
      setDefault()
      const pekemonCaught = generateCaught()
      addMyPokemon(pekemonCaught)
      console.log(pekemonCaught)
      onClose()
      saveToast(nickName)
    }
  }
  return (
    <div>
      <Flex {...flex_button}>
        <Box margin="auto">
          <Flex align="center">
            <Image
              {...img_button}
              src={PokeballG}
              onClick={onOpen}
            ></Image>
          </Flex>
        </Box>
      </Flex>
      <Drawer placement="top" isOpen={isOpen}>
        <DrawerOverlay heigth='100% !important' />
        <DrawerContent heigth='100% !important'>
          <DrawerBody>
            <Container {...drawer_container}>
              <Container {...drawer_container2}>
                <Box margin="20px 10px">
                  {!catching && firsTry &&
                    <>
                      <Text {...message_text}>
                        {"Do You Want ​Catch " + data.pokemon.name + "?"}
                      </Text>
                      <Box marginTop="10px">
                        <Button {...yes_button} onClick={catchingPokemon}>Yes</Button>
                        <Button {...no_button} onClick={closeCatching}>No</Button>
                      </Box>
                    </>
                  }
                  {!catching && !firsTry &&
                    <>
                      {success &&
                        <>
                          <Text {...message_text}>
                            {"Yeey Success to ​Catch " + data.pokemon.name + "!!"}
                          </Text>
                          <Box marginTop="15px">
                            <FormControl id="email" isRequired>
                              <FormLabel>Give Nickname</FormLabel>
                              <Input
                                placeholder="Input Nickname"
                                value={nickName}
                                onClick={setFalseNickName}
                                onChange={handleChange} />
                              {nickNameError &&
                                <FormHelperText color="red !important" textAlign="left">
                                  {nickNameMsg}
                                </FormHelperText>
                              }
                            </FormControl>
                            <Button {...yes_button} onClick={savePokemon}>Save</Button>
                            <Button {...no_button} onClick={closeCatching}>Cancel</Button>
                          </Box>
                        </>
                      }
                      {!success &&
                        <>
                          <Text {...message_text}>
                            {data.pokemon.name + " ran away!! Try again ?"}
                          </Text>
                          <Box marginTop="10px">
                            <Button {...yes_button} onClick={catchingPokemon}>Yes</Button>
                            <Button {...no_button} onClick={closeCatching}>No</Button>
                          </Box>
                        </>
                      }
                    </>
                  }
                  {catching &&
                    <>
                      <Text {...message_text}>
                        {"​Catching " + data.pokemon.name + " !!"}
                      </Text>
                      <CircularProgress marginTop="15px" isIndeterminate color="teal.300" />
                      <Text marginTop="15px">
                        Please Wait!!
                    </Text>
                    </>
                  }
                  <br />
                </Box>
              </Container>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
