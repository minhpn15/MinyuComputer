import React from 'react'
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

import { setToken } from '@/utils/auth'

const LoginForm = ({ onClose }) => {
  const onLogin = () => {
    setToken('token')
  }

  return (
    <Box>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Đăng nhập</Heading>
            <FormControl id="email">
              <FormLabel>Số điện thoại</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mật khẩu</FormLabel>
              <Input type="password" />
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
