import React from 'react'
import {Box, Button, Flex, Image} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import PokeBag from '../assets/PokeBag.png'

export default function MyListButton({}) {
  return (
    <Flex
      justify="space-between"
      overflow="hidden"
      position="fixed"
      bottom="0"
      width="100%"
      left="0"
      wrap="wrap"
      padding="1rem 0"
    >
    <Box margin="auto">
      <Flex align="center">
        <Link to="/caught">
          <Button
              bg="#23CBA7" 
              boxShadow="base"
              colorScheme="teal"
              leftIcon={<Image src={PokeBag} height="20px"/>}
              >My Pokemon

          </Button>
        </Link>
      </Flex>
    </Box>
    </Flex>
  )
}
