import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Image, Box } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { formatCurrency } from '@/utils/common'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <Box
      cursor="pointer"
      maxW={230}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      minHeight={415}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <Image height="218px" src={product.imageUrl} alt={product.imageAlt} />
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
          {product.name}
        </Box>

        <Box color="red.400" fontSize="md" fontWeight="bold">
          {formatCurrency(product?.price)}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating || 3 ? 'orange.300' : 'gray.300'}
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
