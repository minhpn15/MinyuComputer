import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box, Container, useDisclosure } from '@chakra-ui/react'
import LoginModal from '@/modules/account/components/LoginModal'
import useAuth from '@/lib/useAuth'

const Topbar = () => {
  const navigate = useNavigate()
  const { profile, logout } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isLogged = useMemo(() => !!profile, [profile])

  return (
    <Container maxW="container.xl">
      <Box h={9} display="flex" alignItems="center" justifyContent="flex-end">
        {!isLogged && (
          <Button
            mx={2}
            colorScheme="cyan"
            size="xs"
            color="white"
            onClick={() => onOpen()}
          >
            Đăng nhập
          </Button>
        )}
        {isLogged && (
          <>
            <Button
              mx={2}
              colorScheme="cyan"
              size="xs"
              variant="ghost"
              onClick={() => navigate('profile')}
            >
              Tài khoản
            </Button>
            <Button
              mx={2}
              colorScheme="cyan"
              size="xs"
              variant="ghost"
              onClick={logout}
            >
              Đăng xuất
            </Button>
          </>
        )}
      </Box>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default Topbar
