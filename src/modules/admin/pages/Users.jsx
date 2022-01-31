import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { LoadingWrapper } from '@/components'

const Users = () => {
  return (
    <Box>
      <Heading size="lg">Danh sách khách hàng</Heading>
      <Box py={6}>
        <LoadingWrapper>
          <span>Tính năng đang phát triển</span>
        </LoadingWrapper>
      </Box>
    </Box>
  )
}

export default Users
