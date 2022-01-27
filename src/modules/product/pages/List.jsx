import React from 'react'
import { Box } from '@chakra-ui/react'
import useQueryParameter from '@/lib/useQueryParameter'

const Products = () => {
  const { brand } = useQueryParameter()
  console.log('🚀 ~ file: List.jsx ~ line 9 ~ Products ~ search', brand)
  return <Box>ProductList</Box>
}

export default Products
