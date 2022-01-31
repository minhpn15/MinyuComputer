import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Box,
  Container,
  IconButton,
  HStack,
  Tooltip,
  Heading,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { Logo, Logout as LogoutIcon } from '@/assets/icons'
import LoginModal from '@/modules/account/components/LoginModal'
import useAuth from '@/lib/useAuth'

const Header = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLogged, logout } = useAuth()

  return (
    <Box position="relative">
      <Container maxW="container.xl">
        <HStack spacing={6}>
          <Box>
            <Button variant="unstyled" onClick={() => navigate('/admin')}>
              <Logo />
            </Button>
          </Box>
          <Heading color="cyan.500">Admin</Heading>
          {isLogged && (
            <HStack>
              <Link to="/admin/products">
                <Text color={'gray.500'}>Sản phẩm</Text>
              </Link>
              <Link to="/admin/users">
                <Text color={'gray.500'}>Khách hàng</Text>
              </Link>
            </HStack>
          )}
          <HStack spacing={4} flex={1} justifyContent="flex-end">
            {!isLogged && (
              <Button color="white" colorScheme="cyan" onClick={() => onOpen()}>
                Đăng nhập
              </Button>
            )}
            {isLogged && (
              <HStack>
                <Text>Admin name</Text>
                <Tooltip label="Đăng xuất">
                  <IconButton
                    icon={<LogoutIcon />}
                    variant="ghost"
                    onClick={logout}
                  />
                </Tooltip>
              </HStack>
            )}
          </HStack>
        </HStack>
      </Container>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header
