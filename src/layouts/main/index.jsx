import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from '../../components/footer'

const MainLayout = ({ children }) => {
  return (
    <Box as="main">
      <Box
        position="fixed"
        top={0}
        left={0}
        width="full"
        bgColor="white"
        zIndex={10}
        borderBottom={'solid 1px'}
        borderColor={'gray.200'}
        py={4}
      >
        <Header />
      </Box>
      <Container maxW="container.xl" marginTop="73px" paddingTop="32px">
        {children}
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}

export default MainLayout
