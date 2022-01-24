import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Box, Container, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Cart } from '@/assets/icons'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Container maxW="container.xl">
      <Box
        h={16}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={'solid 1px'}
        borderColor={'gray.200'}
        pb={4}
        mb={4}
      >
        <Box mx={4}>
          <Button variant="unstyled" onClick={() => navigate('/')}>
            Logo
          </Button>
        </Box>
        <Box
          mx={4}
          w={'100%'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Input placeholder="Tìm kiếm" />
          <IconButton mx={2} icon={<SearchIcon />} />
        </Box>
        <Box>
          <Button
            mx={2}
            colorScheme="cyan"
            variant="ghost"
            onClick={() => navigate('cart')}
          >
            <Cart />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Header
