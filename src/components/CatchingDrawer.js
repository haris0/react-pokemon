import React, {useState} from 'react'
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
  useDisclosure
} from '@chakra-ui/react'
import PokemonBall from './PokemonBall'


function getRandomItem() {
  const arr = [1, 0]
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

export default function CatchingDrawer({data}) {
  const [catching, setCatching] = useState(false);
  const [firsTry, setFirsTry] = useState(true);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickNaem] = useState("")
  const [nickNameEmpty, setNickNameEmpty] = useState(false)
  const handleChange = (event) => setNickNaem(event.target.value)

  async function catchingPokemon(){
    setCatching(true)
    setTimeout(function() {
      setCatching(false)
      setFirsTry(false)
      setSuccess(!!getRandomItem())
    }.bind(this), 3000)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  function setDefault() {
    setFirsTry(true)
    setSuccess(false)
    setNickNaem("")
    setNickNameEmpty(false)
  }
  
  function closeCatching(){
    onClose()
    setDefault()
  }

  function setFalseNickName() {
    setNickNameEmpty(false)    
  }
  
  const toast = useToast()
  function savePokemon(){
    if(nickName === ""){
      setNickNameEmpty(true)
    }else{
      onClose()
      setDefault()
      const pekemonCaught = {
        nickName:nickName,
        name:data.pokemon.name,
        img:data.pokemon.sprites.front_default,
        type:data.pokemon.types.map(type =>(type.type.name))
      }
      console.log(pekemonCaught)
      toast({
        position: "top",
        title: nickName+" Saved as My Pokemon",
        status: "success",
        duration: 3000,
      })
    }
  }
  return (
    <div>
      <Box onClick={onOpen}>
        <PokemonBall></PokemonBall>
      </Box>
      <Drawer placement="top" isOpen={isOpen}>
        <DrawerOverlay heigth='100% !important' />
        <DrawerContent heigth='100% !important'>
          <DrawerBody>
            <Container maxW="960px" paddingLeft="0px" paddingRight="0px">
              <Container paddingLeft="0px" paddingRight="0px"textAlign="center">
                <Box margin="20px 10px">
                  {!catching && firsTry &&
                    <>
                    <Text 
                      fontSize="18px"
                      fontWeight="Bold"
                      textTransform="capitalize">
                      {"Do You Want ​Catch "+data.pokemon.name+"?"}
                    </Text>
                    <Box marginTop="10px">
                      <Button margin="10px" width="100px" colorScheme="teal" onClick={catchingPokemon}>Yes</Button>
                      <Button margin="10px" width="100px" colorScheme="red" onClick={closeCatching}>No</Button>
                    </Box>
                    </>
                  }
                  {!catching && !firsTry &&
                    <>
                    {success &&
                    <>
                      <Text 
                        fontSize="18px"
                        fontWeight="Bold"
                        textTransform="capitalize">
                        {"Yeey Success to ​Catch "+data.pokemon.name+"!!"}
                      </Text>
                      <Box marginTop="15px">
                        <FormControl id="email" isRequired>
                          <FormLabel>Give Nickname</FormLabel>
                          <Input 
                            placeholder="Input Nickname" 
                            value={nickName}
                            onClick={setFalseNickName}
                            onChange={handleChange} />
                          {nickNameEmpty &&
                            <FormHelperText color="red !important" textAlign="left">Nickname Harus Diisi</FormHelperText>
                          }
                        </FormControl>
                        <Button margin="20px 10px" width="100px" colorScheme="teal" onClick={savePokemon}>Save</Button>
                        <Button margin="20px 10px" width="100px" colorScheme="red" onClick={closeCatching}>Cancel</Button>
                      </Box>
                    </>
                    }
                    {!success &&
                    <>
                      <Text 
                        fontSize="18px"
                        fontWeight="Bold"
                        textTransform="capitalize">
                        {data.pokemon.name+" ran away!! Try again ?"}
                      </Text>
                      <Box marginTop="10px">
                        <Button margin="10px" width="100px" colorScheme="teal" onClick={catchingPokemon}>Yes</Button>
                        <Button margin="10px" width="100px" colorScheme="red" onClick={closeCatching}>No</Button>
                      </Box>
                    </>
                    }
                    </>
                  }
                  {catching &&
                    <>
                    <Text 
                      fontSize="18px"
                      fontWeight="Bold"
                      textTransform="capitalize">
                      {"​Catching "+data.pokemon.name+" !!"}
                    </Text>
                    <CircularProgress marginTop="15px" isIndeterminate color="teal.300" />
                    <Text marginTop="15px">
                      Please Wait!!
                    </Text>
                    </>
                  }
                  <br/>
                </Box>
              </Container>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}