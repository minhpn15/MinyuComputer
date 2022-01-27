import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import {
  Button,
  Input,
  Box,
  Container,
  IconButton,
  HStack,
  InputGroup,
  InputRightElement,
  Tooltip,
  useBoolean,
  useOutsideClick,
  useDisclosure
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { Cart, Logo, Menu as MenuIcon } from '@/assets/icons'
import UserIconGroup from './UserIconGroup'
import Menu from './Menu'

const Header = () => {
  const ref = React.useRef()
  const navigate = useNavigate()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [isOverMenuBtn, setOverMenuBtn] = useBoolean()

  // menu button click debounce
  const debounced = useDebouncedCallback(() => {
    if (!isOverMenuBtn) onClose()
  }, 50)

  useOutsideClick({
    ref: ref,
    handler: () => debounced()
  })

  // input
  const onSearch = event => {
    console.log('Search value:', event.target.value)
    // call api here
  }
  const onSearchDebounced = useDebouncedCallback(onSearch, 700)

  return (
    <Box position="relative">
      <Container maxW="container.xl">
        <HStack spacing={6}>
          <Box>
            <Button variant="unstyled" onClick={() => navigate('/')}>
              <Logo />
            </Button>
          </Box>
          <Tooltip label={isOpen ? 'Đóng' : 'Danh mục'}>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <MenuIcon />}
              variant="ghost"
              onMouseEnter={setOverMenuBtn.on}
              onMouseLeave={setOverMenuBtn.off}
              onClick={onToggle}
            />
          </Tooltip>
          <HStack flex={1} spacing={4}>
            <InputGroup>
              <Input placeholder="Tìm kiếm" onChange={onSearchDebounced} />
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
            </InputGroup>
            <Tooltip label={'Giỏ hàng'}>
              <IconButton
                variant="ghost"
                icon={<Cart />}
                onClick={() => navigate('cart')}
              />
            </Tooltip>
            <UserIconGroup />
          </HStack>
        </HStack>
      </Container>
      <Menu ref={ref} isOpen={isOpen} />
    </Box>
  )
}

export default Header
