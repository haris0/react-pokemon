import React from 'react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react'

export default function WeightHeaight({height, weight}) {
  return (
    <div>
      <StatGroup 
        margin="5px" 
        boxShadow="inset 0 0 0 1px #e1e1e1"
        borderRadius="5px"
        padding="20px"
        textAlign="center">
        <Stat position="initial">
          <StatLabel >Height</StatLabel>
          <StatNumber >{height+'"'}</StatNumber>
        </Stat>
        <Stat position="initial">
          <StatLabel>Weight</StatLabel>
          <StatNumber>{weight+" lbs"}</StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}
