import React from 'react'
import {Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
        Box,
        Table,
        Tbody, 
        Tr,
        Td,
        } from '@chakra-ui/react'

export default function MovesTable({movesList}) {
  return (
    <div>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Show Moves
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="simple">
              <Tbody>
                {movesList.map(move =>(
                  <Tr key={move.move.name}>
                    <Td >{move.move.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
