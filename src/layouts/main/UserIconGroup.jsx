import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Box,
  HStack,
  useDisclosure,
  IconButton,
  Tooltip
} from '@chakra-ui/react'
import LoginModal from '@/modules/account/components/LoginModal'
import useAuth from '@/lib/useAuth'
import { User, Logout as LogoutIcon } from '@/assets/icons'

const UserIconGroup = () => {
  const navigate = useNavigate()
  const { isLogged, profile, logout } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack spacing={4}>
      <Box h={9} display="flex" alignItems="center" justifyContent="flex-end">
        {!isLogged && (
          <Button color="white" colorScheme="cyan" onClick={() => onOpen()}>
            Đăng nhập
          </Button>
        )}
        {isLogged && (
          <>
            <Tooltip label="Thông tin tài khoản">
              <IconButton
                icon={<User />}
                variant="ghost"
                onClick={() => navigate('profile')}
              />
            </Tooltip>
            <Tooltip label="Đăng xuất">
              <IconButton
                icon={<LogoutIcon />}
                variant="ghost"
                onClick={logout}
              />
            </Tooltip>
          </>
        )}
      </Box>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  )
}

export default UserIconGroup
