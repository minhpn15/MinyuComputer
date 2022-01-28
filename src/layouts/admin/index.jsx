import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import AuthProvider from '@/lib/AuthProvider'
import Header from './Header'

const AdminLayout = ({ children }) => {
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
          py={4}
        >
          <Header />
        </Box>
        <Container maxW="container.xl" marginTop="73px" paddingTop="32px">
          {children}
          <Outlet />
        </Container>
      </Box>
    </AuthProvider>
  )
}

export default AdminLayout
