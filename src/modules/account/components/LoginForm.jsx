import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Box,
  Text
} from '@chakra-ui/react'
import useAuth from '@/lib/useAuth'
import { setToken } from '@/utils/auth'

const LoginForm = ({ onClose }) => {
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const { login } = useAuth()

  const onLogin = () => {
    if (!password || !phone) return
    // TODO: cheat
    login({ phone, password })
    onClose()
  }

  return (
    <Box>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Đăng nhập</Heading>
            <FormControl id="phone" isRequired>
              <FormLabel>Số điện thoại</FormLabel>
              <Input type="number" onChange={e => setPhone(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Mật khẩu</FormLabel>
              <Input
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Flex>
                  <Text>Chưa có tài khoản?&nbsp;</Text>
                  <Link to="/account/register" onClick={onClose}>
                    <Text color={'cyan.500'}>Đăng kí</Text>
                  </Link>
                </Flex>
                <Link to="/account/forgot-password" onClick={onClose}>
                  <Text color={'cyan.500'}> Quên mật khẩu</Text>
                </Link>
              </Stack>
              <Button
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, cyan.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, cyan.400,pink.400)',
                  boxShadow: 'xl'
                }}
                onClick={onLogin}
                type="submit"
              >
                Đăng nhập
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default LoginForm
