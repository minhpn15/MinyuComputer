import React from 'react'
import { Spinner, Box, Text, VStack, Image, SlideFade } from '@chakra-ui/react'

const imageUrl =
  'https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif'

const Center = ({ children }) => {
  return (
    <Box
      w="100%"
      h="100%"
      minHeight="300px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  )
}
const LoadingWrapper = ({ isLoading = false, isEmpty = false, children }) => {
  if (isLoading)
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    )

  if (isEmpty)
    return (
      <Center>
        <VStack alignItems="center">
          <Image src={imageUrl} height={250} />
          <Text>Không có dữ liệu!</Text>
        </VStack>
      </Center>
    )

  return (
    <SlideFade in offsetY="30px">
      {children}
    </SlideFade>
  )
}

export default LoadingWrapper
