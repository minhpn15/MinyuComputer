import React, { useMemo } from 'react'
import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { ProductCard } from '@/components'
import useReflectionSearchParams from '@/lib/useReflectionSearchParams'
// import { paginate } from '@/constant/paginattion'
import { LoadingWrapper } from '@/components'
import useGetProducts from '../services/useGetProducts'

const Products = () => {
  const [searchParams, setSearchParams] = useReflectionSearchParams()
  const getListParameters = useMemo(
    () => ({
      ...searchParams
    }),
    [searchParams]
  )
  const { data: products = [], isLoading } = useGetProducts(getListParameters)

  return (
    <Box>
      <Heading size="lg">Sản phẩm</Heading>
      <Box py={6}>
        <LoadingWrapper
          isLoading={isLoading}
          isEmpty={!products || products.length === 0}
        >
          <Wrap spacing={6}>
            {products.map((product, index) => (
              <WrapItem key={index}>
                <ProductCard product={product} />
              </WrapItem>
            ))}
          </Wrap>
        </LoadingWrapper>
      </Box>
    </Box>
  )
}

export default Products
