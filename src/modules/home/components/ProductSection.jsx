import React from 'react'
import {
  Button,
  Box,
  Heading,
  Wrap,
  WrapItem,
  Flex,
  Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ProductCard } from '@/components'

const ProductSection = ({ title, products = [1, 2, 3, 4, 5, 6, 7] }) => {
  return (
    <Box as="section" mb={8} borderColor="gray.300">
      {/* Title */}
      <Box as="section" bg="cyan.500" borderRadius={'xl'} p={2}>
        <Flex align="center" justify="space-between">
          <Heading ml={2} fontSize={'md'} color="white">
            {title || 'Title'}
          </Heading>
          <Button
            variant="transparent"
            rightIcon={<ArrowForwardIcon color="white" />}
          >
            <Text color="white">Xem thêm</Text>
          </Button>
        </Flex>
      </Box>
      {/* Products */}
      <Box py={6}>
        <Wrap spacing={6}>
          {products.map((product, index) => (
            <WrapItem key={index}>
              <ProductCard product={product} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  )
}

export default ProductSection
