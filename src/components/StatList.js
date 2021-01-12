import React from 'react'
import {
  Text,
  Box,
  Progress,
  Grid,
} from '@chakra-ui/react'

export default function StatList({statList}) {
  return (
    <div>
      <Box margin="5px">              
        {statList.map(stat => (
          <Box key={stat.stat.name}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box w="100%" >
              <Text textTransform="uppercase">{stat.stat.name}</Text>
            </Box>
            <Box w="100%">
              <Text textTransform="uppercase" textAlign="right">{stat.base_stat}</Text>
            </Box>
          </Grid>
          <Progress marginTop="5px" position="inherit" colorScheme="teal" size="xs" value={stat.base_stat} />
          </Box>
        ))}
      </Box>
    </div>
  )
}
