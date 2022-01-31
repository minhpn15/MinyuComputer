import React, { useMemo, useState } from 'react'
import {
  Box,
  Container,
  SlideFade,
  HStack,
  VStack,
  Text,
  Heading,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

import { LAPTOP_LINE_BY_BRANDS, PRODUCT_TYPES } from '@/constant/product'

const Menu = React.forwardRef(({ isOpen }, ref) => {
  if (!isOpen) return null
  const types = useMemo(() => Object.keys(PRODUCT_TYPES), [])
  const [selected, setSelected] = useState(types[0])

  const onFilter = value => {
    console.log(value)
  }

  const renderDetail = () => {
    return (
      <VStack p={6} spacing={4} alignItems="flex-start">
        <Heading color="cyan.600">{selected}</Heading>
        <Box>
          <Text mb={4} fontSize="xl" fontWeight="bold">
            Theo thương hiệu
          </Text>
          <Wrap spacing={4}>
            {Object.keys(PRODUCT_TYPES[selected]).map(brand => (
              <WrapItem>
                <Box
                  px={6}
                  py={3}
                  rounded={6}
                  width="full"
                  role="button"
                  cursor="pointer"
                  bg="gray.200"
                  onClick={() => onFilter({ brand })}
                  _hover={{
                    bg: 'gray.500',
                    '& p': { color: 'white' }
                  }}
                >
                  <Text fontWeight="bold">{brand}</Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box>
          <Text mb={4} fontSize="xl" fontWeight="bold">
            Theo nhu cầu
          </Text>
          <Text color="gray.600">
            Tính năng đang được phát triển, sẽ ra mắt trong thời gian tới
          </Text>
        </Box>
      </VStack>
    )
  }

  const renderProducts = () => {
    return types.map(typeName => {
      const isActive = selected === typeName
      return (
        <Box
          px={6}
          py={3}
          width="full"
          role="button"
          cursor="pointer"
          bg={isActive ? 'white' : 'gray.200'}
          onClick={() => setSelected(typeName)}
          _hover={{
            bg: 'cyan.600',
            '& p': { color: 'white' }
          }}
        >
          <Text color={isActive ? 'cyan.600' : 'gray.700'} fontWeight="bold">
            {typeName}
          </Text>
        </Box>
      )
    })
  }

  return (
    <Box width="full" position="absolute" top="100%" left={0} mt={4}>
      <SlideFade in={isOpen}>
        <Box ref={ref} bg="white" shadow="md">
          <Container maxW="container.xl">
            <Box color="white" py={4}>
              <HStack alignItems="flex-start">
                <Box rounded={4} overflowY="auto" maxheight="90vh">
                  <VStack spacing={0}>{renderProducts()}</VStack>
                </Box>
                <Box flex={1} rounded={4} overflowY="auto" maxheight="90vh">
                  {renderDetail()}
                </Box>
              </HStack>
            </Box>
          </Container>
        </Box>
      </SlideFade>
    </Box>
  )
})

export default Menu
