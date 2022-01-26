import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Text, Button, Image, VStack } from '@chakra-ui/react'

const imageUrl =
  'https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Box width="full" height="full" pb={8}>
      <VStack alignItems="center">
        <Image src={imageUrl} height={250} />
        <VStack spacing={1} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            404
          </Text>
          <Text>Trang không tồn tại!</Text>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Text color={'cyan.500'}>Trang chủ</Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default NotFound
