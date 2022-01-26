import React, { useMemo } from 'react'
import { Box, Container, SlideFade } from '@chakra-ui/react'

const Menu = React.forwardRef(({ isOpen }, ref) => {
  const menuHeight = useMemo(() => (isOpen ? '90vh' : '0px'), [isOpen])

  return (
    <Box
      height={menuHeight}
      width="full"
      position="absolute"
      top="100%"
      left={0}
      bg="rgba(0, 0, 0, 0.39)"
      mt={5}
    >
      <SlideFade in={isOpen}>
        <Box ref={ref} minHeight="600px" bg="white" shadow="md">
          <Container maxW="container.xl">
            <Box color="white" bg="teal.500" p={8}>
              Menu is here
            </Box>
          </Container>
        </Box>
      </SlideFade>
    </Box>
  )
})

export default Menu
