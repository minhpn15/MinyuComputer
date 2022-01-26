import {
  Box,
  Stack,
  Heading,
  Container,
  SimpleGrid,
  Center
} from '@chakra-ui/react'

import LoginForm from '../components/LoginForm'

const Login = () => {
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
              Chào mừng đã quay trở lại!
            </Heading>
          </Center>
        </Stack>
        <LoginForm />
      </Container>
    </Box>
  )
}

export default Login
