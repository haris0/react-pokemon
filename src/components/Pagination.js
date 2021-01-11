import React from 'react'
import {Box, Button, Flex} from '@chakra-ui/react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
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
        {gotoPrevPage && <Button 
                            marginRight="10px" 
                            bg="#11BD1D" 
                            boxShadow="base" 
                            colorScheme="green" 
                            onClick={gotoPrevPage}>Prev</Button>}
        {gotoNextPage && <Button 
                            bg="#11BD1D" 
                            boxShadow="base" 
                            colorScheme="green"
                            onClick={gotoNextPage}>Next</Button>}
      </Flex>
    </Box>
    </Flex>
  )
}
