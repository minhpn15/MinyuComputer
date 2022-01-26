import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import AuthProvider from '@/lib/AuthProvider'
import Topbar from './Topbar'
import Header from './Header'
import Footer from '../../footer'

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
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
          pb={5}
        >
          <Topbar />
          <Header />
        </Box>
        <Container maxW="container.xl" marginTop="97px" paddingTop="32px">
          {children}
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </AuthProvider>
  )
}

export default MainLayout
