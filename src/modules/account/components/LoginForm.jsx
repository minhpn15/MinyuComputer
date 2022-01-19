import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Box,
  Text
} from '@chakra-ui/react'

const LoginForm = () => {
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
                  <Link color={'cyan.500'} href="/account/register">
                    Đăng kí
                  </Link>
                </Flex>
                <Link color={'cyan.500'} href="/account/forgot-password">
                  Quên mật khẩu
                </Link>
              </Stack>
              <Button colorScheme={'cyan'} variant={'solid'} color={'white'}>
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
