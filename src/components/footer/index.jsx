import react from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'

import { Twitter, Youtube, Instagram, Logo } from '@/assets/icons'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Minyu Computer</ListHeader>
            <Link to="#">
              <Text>Điện thoại: 0939.999.999</Text>
            </Link>
            <Link to="#">
              <Text>Zalo: 0939.999.999</Text>
            </Link>
            <Link to="#">
              <Text>Thời gian: 9h-21h từ thứ 2 - chủ nhật</Text>
            </Link>
            <Link to="#">
              <Text>Địa chỉ: 123, Võ Văn Ngân, Thủ Đức, tp.Hồ Chí Minh</Text>
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Link to="#">
              <Text>Hóa đơn điện tử</Text>
            </Link>
            <Link to="#">
              <Text>Chính sách bảo hành</Text>
            </Link>
            <Link to="#">
              <Text>Tra cứu thông tin bảo hành</Text>
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>
              <Logo />
            </ListHeader>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2022 Nhut Minh</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <Twitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <Youtube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <Instagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
