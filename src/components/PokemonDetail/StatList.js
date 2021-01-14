import React from 'react'
import {
  Text,
  Box,
  Progress,
  Grid,
} from '@chakra-ui/react'

export default function StatList({statList}) {
  const progrs_style = {
    marginTop:"5px",
    position:"inherit",
    colorScheme:"teal",
    size:"xs"
  }

  const stat_value = {
    textTransform:"uppercase",
    textAlign:"right"
  }

  const stat_name = {
    textTransform:"uppercase"
  }
  return (
    <div>
      <Box margin="5px">              
        {statList.map(stat => (
          <Box key={stat.stat.name}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box w="100%" >
              <Text {...stat_name}>{stat.stat.name}</Text>
            </Box>
            <Box w="100%">
              <Text {...stat_value}>{stat.base_stat}</Text>
            </Box>
          </Grid>
          <Progress {...progrs_style} value={stat.base_stat} />
          </Box>
        ))}
      </Box>
    </div>
  )
}
