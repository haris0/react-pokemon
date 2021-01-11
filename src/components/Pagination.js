import React from 'react'
import {Button} from '@chakra-ui/react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <Button marginRight="10px" colorScheme="blue" onClick={gotoPrevPage}>Prev</Button>}
      {gotoNextPage && <Button marginRight="10px" colorScheme="blue" onClick={gotoNextPage}>Next</Button>}
    </div>
  )
}
