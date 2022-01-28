import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react'

const imageUrl =
  'https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Box width="full" height="full" pb={8}>
      <VStack alignItems="center">
        <Image src={imageUrl} height={250} />
        <VStack spacing={1} textAlign="center">
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              404 |
            </Text>
            <Text>Trang không tồn tại!</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  )
}

export default NotFound
