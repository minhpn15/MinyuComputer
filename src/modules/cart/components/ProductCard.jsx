import React, { useMemo } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Image
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { formatCurrency } from '@/utils/common'

const ProductCard = ({ product, onRemove }) => {
  const { name, price, amount } = product
  const finalPrice = useMemo(() => price * (amount || 1), [])

  return (
    <Box
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 2, sm: 6, lg: 6 }}
      border="solid 1px"
      borderColor={'gray.200'}
      minHeight={150}
    >
      <Grid
        templateRows={{ md: 'repeat(4, 1fr)', lg: 'repeat(1, 1fr)' }}
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <GridItem
          rowSpan={{ base: 4, md: 4, lg: 1 }}
          colSpan={{ base: 2, md: 2, lg: 1 }}
        >
          <Image height={100} src={product?.imageUrl} alt={product?.imageAlt} />
        </GridItem>
        <GridItem
          rowSpan={{ base: 1, md: 1, lg: 1 }}
          colSpan={{ base: 4, md: 4, lg: 3 }}
        >
          <Heading fontSize={'md'}>{name}</Heading>
          <Text color={'pink.400'} fontWeight={'bold'}>
            {formatCurrency(price)}
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 1, md: 1, lg: 1 }}
          colSpan={{ md: 4, lg: 1 }}
        >
          x{amount || 1}
        </GridItem>
        <GridItem
          rowSpan={{ base: 1, md: 1, lg: 1 }}
          colSpan={{ md: 4, lg: 1 }}
        >
          <Flex flexDirection={'column'} alignItems={'end'}>
            <Text color={'pink.400'} fontWeight={'bold'}>
              {formatCurrency(finalPrice || 0)}
            </Text>
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="pink"
              variant="ghost"
              size="md"
              onClick={() => onRemove(product)}
            >
              Xóa
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ProductCard
