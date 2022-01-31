import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Heading } from '@chakra-ui/react'
import { LoadingWrapper } from '@/components'

const Products = () => {
  return (
    <Box>
      <Heading size="lg">Danh sách sản phẩm</Heading>
      <Box py={6}>
        <LoadingWrapper>
          <span>Tính năng đang phát triển</span>
        </LoadingWrapper>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Products
