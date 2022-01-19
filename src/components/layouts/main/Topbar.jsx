import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box, Container, useDisclosure } from '@chakra-ui/react'
import { Login, LogOut, Account } from '@/components/icons'
import LoginModal from '@/modules/account/components/LoginMoDal'

const Topbar = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isLogged = false

  return (
    <Container maxW="container.xl">
      <Box h={9} display="flex" alignItems="center" justifyContent="flex-end">
        <Button
          mx={2}
          leftIcon={<Login />}
          colorScheme="cyan"
          size="xs"
          color="white"
          // onClick={() => navigate('account/login')}
          onClick={() => onOpen()}
        >
          Đăng nhập
        </Button>
        <Button
          mx={2}
          leftIcon={<Account />}
          colorScheme="cyan"
          size="xs"
          variant="ghost"
          onClick={() => navigate('account/me')}
        >
          Tài khoản
        </Button>
        {isLogged && (
          <Button
            mx={2}
            leftIcon={<LogOut />}
            colorScheme="cyan"
            size="xs"
            variant="ghost"
          >
            Đăng xuất
          </Button>
        )}
      </Box>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default Topbar
