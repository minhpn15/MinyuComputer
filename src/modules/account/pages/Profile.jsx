import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Text,
  Button,
  Avatar,
  VStack,
  HStack,
  Heading
} from '@chakra-ui/react'
import useAuth from '@/lib/useAuth'

const Profile = () => {
  const navigate = useNavigate()
  const { profile, isLogged } = useAuth()

  const { name, phone } = profile || {}

  if (!isLogged)
    return (
      <HStack p={8} justifyContent="center">
        <Heading size="md">Bạn chưa đăng nhập</Heading>
        <Button variant="outline" onClick={() => navigate('/')}>
          <Text color={'cyan.500'}>Đăng nhập</Text>
        </Button>
      </HStack>
    )

  return (
    <Box p={8}>
      <Heading>Thông tin tài khoản</Heading>
      <VStack mt={8}>
        <Avatar size="xl" src="https://bit.ly/broken-link" />
        <Heading size="md">{name || 'Không xác định'}</Heading>
        <Text>{phone || '-'}</Text>
      </VStack>
    </Box>
  )
}

export default Profile
