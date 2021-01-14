import React from 'react'
import {
  Box,
  Badge,
} from '@chakra-ui/react'

import {PokemonColors} from "../PokemonColors";

export default function TypeList({typeList}) {
  return (
    <div>
      <Box textAlign="center" marginBottom="10px">
        {typeList.map(type =>(
          <Badge 
            variant="solid" 
            margin="5px"
            textTransform="capitalize"
            bgColor={PokemonColors[type.type.name]}
            key={type.type.name}
            >
            {type.type.name}
          </Badge>
        ))}
      </Box>
    </div>
  )
}
