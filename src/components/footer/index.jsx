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

import { Twitter, Youtube, Instagram  } from '@/assets/icons'

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
            <ListHeader>Cửa hàng</ListHeader>
            <Link color={'gray.700'} href={'#'}>
              Điện thoại: 0939.999.999
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Zalo: 0939.999.999
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Thời gian: 9h-21h từ thứ 2 - chủ nhật
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Địa chỉ: 123, Võ Văn Ngân, Thủ Đức, tp.Hồ Chí Minh
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Link color={'gray.700'} href={'#'}>
              Hóa đơn điện tử
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Chính sách bảo hành
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Tra cứu thông tin bảo hành
            </Link>
          </Stack>

          {/* <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link color={'gray.700'} href={'#'}>
              Cookies Policy
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Privacy Policy
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Terms of Service
            </Link>
            <Link color={'gray.700'} href={'#'}>
              Law Enforcement
            </Link>
          </Stack> */}

          <Stack align={'flex-start'}>
            <ListHeader>Logo</ListHeader>
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
            <SocialButton label={'Twitter'} color={'gray.700'} href={'#'}>
              <Twitter />
            </SocialButton>
            <SocialButton label={'YouTube'} color={'gray.700'} href={'#'}>
              <Youtube />
            </SocialButton>
            <SocialButton label={'Instagram'} color={'gray.700'} href={'#'}>
              <Instagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
