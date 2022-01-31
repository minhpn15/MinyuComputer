import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Heading } from '@chakra-ui/react'
import { LoadingWrapper } from '@/components'

const CreateProducts = () => {
  return (
    <Box>
      <Heading size="lg">Thêm sản phẩm</Heading>
      <Box py={6}>
        <LoadingWrapper isEmpty>
          <span>Chưa có</span>
        </LoadingWrapper>
      </Box>
      <Outlet />
    </Box>
  )
}

export default CreateProducts
