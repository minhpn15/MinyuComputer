import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Center
} from '@chakra-ui/react'

const Register = () => {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Center h={'100%'}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              Xin chào!
            </Heading>
          </Center>
          {/* <Image scr={imgRegister} height={{ base: 200 }} /> */}
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Tham gia mua sắm với chúng tôi
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Họ Tên"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500'
                }}
              />
              <Input
                placeholder="Email"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500'
                }}
              />
              <Input
                placeholder="Số điện thoại"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500'
                }}
              />

              <Input
                placeholder="Mật khẩu"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500'
                }}
              />
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
            >
              Đăng kí
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  )
}

export default Register
