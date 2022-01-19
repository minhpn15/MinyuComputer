import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const ProductCard = () => {
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
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <GridItem colSpan={1}>Image</GridItem>
        <GridItem colSpan={3}>
          <Heading fontSize={'md'}>Asus Zenbook Q408UG</Heading>
          <Text color={'pink.400'} fontWeight={'bold'}>
            18.490.000
          </Text>
        </GridItem>
        <GridItem colSpan={1}>x1</GridItem>
        <GridItem colSpan={1}>
          <Flex flexDirection={'column'} alignItems={'end'}>
            <Text color={'pink.400'} fontWeight={'bold'}>
              18.490.000
            </Text>
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="pink"
              variant="ghost"
              size="md"
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
