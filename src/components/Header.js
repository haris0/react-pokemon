import React from "react";
import {Image, Flex} from "@chakra-ui/react";
import Poketop from "../assets/Poketop.png";
import { Link } from "react-router-dom";

export default function Header(){
  
  return (
    <Flex {...header_flex}>
      <Flex align="center" mr={5}>
      <Link to="/">
        <Image
          width="120px"
          height="25px"
          src={Poketop}/>
        </Link>
      </Flex>
    </Flex>
  );
};

const header_flex = {
  as:"nav",
  align:"center",
  justify:"space-between",
  overflow:"hidden",
  position:"fixed",
  top:"0",
  width:"100%",
  wrap:"wrap",
  padding:"1rem",
  bg:"white",
  boxShadow:"lg",
  marginBottom:"15px"
}