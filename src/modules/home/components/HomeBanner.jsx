import React from 'react'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Carousel from '@/components/carousels'

const HomeBanner = props => {
  return (
    <Grid
      h="500px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
      mb={8}
    >
      <GridItem rowSpan={3} colSpan={4}>
        <Carousel />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box
          height={'full'}
          p={{ base: 2, sm: 6, lg: 6 }}
          rounded={'xl'}
          border="solid 2px"
          borderColor={'cyan.300'}
        >
          <Heading fontSize={'2xl'}>Miễn phí vận chuyển</Heading>
          <Text color="gray.600">
            100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
          </Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box
          height={'full'}
          p={{ base: 2, sm: 6, lg: 6 }}
          rounded={'xl'}
          border="solid 2px"
          borderColor={'purple.300'}
        >
          <Heading fontSize={'2xl'}>Bảo hành tận tâm</Heading>
          <Text color="gray.600">
            Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách hàng
            tới cùng.
          </Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box
          height={'full'}
          p={{ base: 2, sm: 6, lg: 6 }}
          rounded={'xl'}
          border="solid 2px"
          borderColor={'pink.300'}
        >
          <Heading fontSize={'2xl'}>Đổi trả 1-1 hoặc hoàn tiền</Heading>
          <Text color="gray.600">
            Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu
            cầu.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default HomeBanner
