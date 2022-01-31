import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import shallow from 'zustand/shallow'
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
  useDisclosure,
  Badge
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { Cart, Logo, Menu as MenuIcon } from '@/assets/icons'
import useQueryParameter from '@/lib/useQueryParameter'
import { useStore } from '@/lib/StoreProvider'
import UserIconGroup from './UserIconGroup'
import Menu from './Menu'

const Header = () => {
  const ref = React.useRef()
  const navigate = useNavigate()
  const { filter, page, size } = useQueryParameter()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [isOverMenuBtn, setOverMenuBtn] = useBoolean()
  const [searchValue, setSearchValue] = React.useState(filter)
  const cart = useStore(state => state.cart, shallow)

  // menu button click debounce
  const debounced = useDebouncedCallback(() => {
    if (!isOverMenuBtn) onClose()
  }, 50)

  useOutsideClick({
    ref: ref,
    handler: () => debounced()
  })

  const onSearch = value => {
    navigate({
      pathname: 'product',
      search: `?filter=${value}&page=${page || 1}&size=${size || 20}`
    })
  }
  const onSearchDebounced = useDebouncedCallback(onSearch, 700)

  const onFilterChange = event => {
    const value = event.target.value
    setSearchValue(value)
    onSearchDebounced(value)
  }

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
              <Input
                value={searchValue || ''}
                placeholder="Tìm kiếm"
                onChange={onFilterChange}
              />
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
            </InputGroup>
            <Tooltip label={'Giỏ hàng'}>
              <Box position="relative">
                <IconButton
                  variant="ghost"
                  icon={<Cart />}
                  onClick={() => navigate('cart')}
                />
                <Box position="absolute" bottom={0} right={0}>
                  <Badge colorScheme="red" rounded="6px">
                    {(cart || []).length}
                  </Badge>
                </Box>
              </Box>
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
