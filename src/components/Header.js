import React from "react";
import {Image, Flex} from "@chakra-ui/react";
import Poketop from "../assets/Poketop.png";


export default function Header(props){
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      overflow="hidden"
      position="fixed"
      top="0"
      width="100%"
      wrap="wrap"
      padding="1rem"
      bg="white"
      boxShadow="lg"
      marginBottom="15px"
      {... props}
    >
      <Flex align="center" mr={5}>
        <Image
          width="120px"
          height="25px"
          src={Poketop}
        />
      </Flex>
    </Flex>
  );
};