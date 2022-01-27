import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Image, Box, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const productD = {
  imageUrl:
    'https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/11/6/msi-gf63-thinkpro-1.jpg',
  imageAlt: 'MSI GF63 Thin (Chính hãng) (468VN)',
  beds: 3,
  baths: 2,
  title: 'MSI GF63 Thin (Chính hãng) (468VN)',
  formattedPrice: '20.990.000',
  reviewCount: 34,
  rating: 4
}

const ProductCard = props => {
  const navigate = useNavigate()
  const product = productD
  return (
    <Box
      cursor="pointer"
      maxW={220}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      minHeight={340}
      onClick={() => navigate('/product/123123')}
    >
      <Image src={product.imageUrl} alt={product.imageAlt} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color="gray.700"
        >
          {product.title}
        </Box>

        <Box color="red.400" fontSize="md" fontWeight="bold">
          {product.formattedPrice}
          <Box as="span"> VND</Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating ? 'orange.300' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
