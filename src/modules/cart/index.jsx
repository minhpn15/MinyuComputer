import React from 'react'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Divider,
  Grid,
  GridItem
} from '@chakra-ui/react'
import ProductCard from './components/ProductCard'

const Cart = () => {
  return (
    <Box>
      <Box py={4}></Box>
      <Heading lineHeight={1.1}>
        Giỏ hàng
        <Text as="span" color="pink.400">
          ({0})
        </Text>
      </Heading>
      <Container
        as={Grid}
        maxW={'7xl'}
        templateColumns={{ base: 'repeat(12, 1fr)', md: 'repeat(12, 1fr)' }}
        py={{ base: 4, sm: 8, lg: 8 }}
        gap={4}
      >
        <GridItem colSpan={{ base: 1, md: 8 }}>
          <Stack spacing={4}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Stack>
        </GridItem>
        <GridItem colSpan={4}>
          <Stack spacing={{ base: 1, md: 4 }} maxW={{ lg: 'lg' }}>
            <Box
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 2, sm: 6, lg: 6 }}
              border="solid 1px"
              borderColor={'gray.200'}
            >
              <Heading fontSize="2xl">Khuyến mãi</Heading>
              <Stack spacing={4} mt={4}>
                <Input
                  placeholder="Nhập mã khuyến mãi"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500'
                  }}
                />
              </Stack>
            </Box>
            <Box
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 2, sm: 6, lg: 6 }}
              border="solid 1px"
              borderColor={'gray.200'}
            >
              <Heading fontSize="2xl">Tóm tắt đơn hàng</Heading>
              <Stack spacing={4} mt={4}>
                <Flex justifyContent={'space-between'}>
                  <Text>Tạm tính</Text>
                  <Text>18.000.000</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text>Khuyến mãi</Text>
                  <Text>- 200.000</Text>
                </Flex>
                <Divider />
                <Flex justifyContent={'space-between'}>
                  <Text>Tổng cộng</Text>
                  <Text color="pink.400" fontWeight={700}>
                    18.800.000
                  </Text>
                </Flex>
                <Divider variant="dashed" color="gray.800" />
                <Button
                  mt={8}
                  py={6}
                  w={'full'}
                  bgGradient="linear(to-r, cyan.400,pink.400)"
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(to-r, cyan.400,pink.400)',
                    boxShadow: 'xl'
                  }}
                >
                  Đặt hàng
                </Button>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Container>
    </Box>
  )
}

export default Cart
