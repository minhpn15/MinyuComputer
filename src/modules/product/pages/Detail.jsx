import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Circle,
  Image
} from '@chakra-ui/react'
import { LoadingWrapper } from '@/components'
import { useStore } from '@/lib/StoreProvider'
import useToast from '@/lib/useToast'
import useGetProductById from '../services/useGetProductById'

const Detail = () => {
  const { id: productId } = useParams()
  const toast = useToast()
  const { data: product = null, isLoading } = useGetProductById(productId)

  const addProductToCart = useStore(state => state.addProductToCart)

  const addProduct = () => {
    // TODO
    // call api add to cart
    // invalidate api get user cart to update amount of product
    if (!product) return
    addProductToCart(product)
    toast({ message: 'Sản phẩm đã được thêm vào giỏ hàng' })
  }

  return (
    <LoadingWrapper isLoading={isLoading} isEmpty={!product}>
      <Container
        as={Grid}
        maxW={'7xl'}
        templateColumns={{ base: 'repeat(12, 1fr)', md: 'repeat(12, 1fr)' }}
        gap={4}
      >
        <GridItem colSpan={{ base: 1, md: 7 }}>
          <Stack spacing={4}>
            <Image
              height={600}
              src={product?.imageUrl}
              alt={product?.imageAlt}
            />
            <Box
              borderRadius={'xl'}
              p={4}
              border="solid 1px"
              borderColor={'gray.200'}
            >
              <Heading fontSize={'xl'}>Cấu hình & đặc điểm</Heading>
              <Text>{product?.description}</Text>
              <Button colorScheme={'cyan'} mt={4} variant={'ghost'}>
                Xem cấu hình chi tiết
              </Button>
              <Divider />
              <Box mt={4}>
                <Heading fontSize={'xl'}>Đánh giá & nhận xét</Heading>
                <Flex
                  py={8}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Heading fontSize={'md'}>Chưa có đánh giá & nhận xét</Heading>
                  <Text>Nên mua hay không? Hãy giúp anh em bạn nhé</Text>
                  <Button colorScheme={'cyan'} mt={4} color={'white'}>
                    Đánh giá
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Stack>
        </GridItem>
        <GridItem colSpan={5}>
          <Box
            p={4}
            borderRadius={'xl'}
            border="solid 1px"
            borderColor={'gray.200'}
          >
            <Heading fontSize={'2xl'}>{product?.name}</Heading>
            <Flex alignItems={'center'} color={'gray.400'}>
              <Text>SKU: TUFDashF1503CF</Text> -{' '}
              <Text>MPN: FX516PC-HN002T</Text>
            </Flex>
            <Box>
              <Text
                as="span"
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={'pink.500'}
              >
                {product?.price}
              </Text>
              <Text as="span" fontSize={'xl'} color={'pink.500'}>
                -12%
              </Text>
            </Box>
            <Box>
              <Text>Màu sắc: </Text>
              <HStack spacing={4} mt={2}>
                <Circle
                  size="25px"
                  bg="tomato"
                  color="white"
                  border="solid 1px"
                  borderColor={'gray.200'}
                />
                <Circle
                  size="25px"
                  bg="black"
                  color="white"
                  border="solid 1px"
                  borderColor={'gray.200'}
                />
                <Circle
                  size="25px"
                  bg="white"
                  color="white"
                  border="solid 1px"
                  borderColor={'gray.200'}
                />
              </HStack>
            </Box>
            <Button
              size={'lg'}
              colorScheme={'pink'}
              w="full"
              mt={4}
              onClick={addProduct}
            >
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </GridItem>
      </Container>
    </LoadingWrapper>
  )
}

export default Detail
