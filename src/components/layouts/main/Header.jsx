import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  Box,
  Container,
  IconButton,
  HStack
  // useOutsideClick
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { Cart, Menu as MenuIcon } from '@/assets/icons'
import Menu from './Menu'

const Header = () => {
  const ref = React.useRef()
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()

  // useOutsideClick({
  //   ref: ref,
  //   handler: () => {
  //     setOpenMenu(false)
  //   }
  // })

  return (
    <Box position="relative">
      <Container maxW="container.xl">
        <HStack spacing={6}>
          <Box>
            <Button variant="unstyled" onClick={() => navigate('/')}>
              Logo
            </Button>
          </Box>
          <Button
            variant="ghost"
            leftIcon={openMenu ? <CloseIcon /> : <MenuIcon />}
            onClick={event => {
              event.stopPropagation()
              setOpenMenu(state => !state)
            }}
          >
            {openMenu ? 'Đóng' : 'Danh mục'}
          </Button>
          <HStack flex={1} spacing={4}>
            <Input placeholder="Tìm kiếm" />
            <IconButton ml={2} icon={<SearchIcon />} />
            <IconButton
              variant="ghost"
              icon={<Cart />}
              onClick={() => navigate('cart')}
            />
          </HStack>
        </HStack>
      </Container>
      <Menu ref={ref} isOpen={openMenu} />
    </Box>
  )
}

export default Header
