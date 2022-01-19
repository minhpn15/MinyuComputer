import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import Topbar from './Topbar'
import Header from './Header'
import Footer from '../../footer'

const MainLayout = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Topbar />
      <Header />
      <Container maxW="container.xl">
        {children}
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}

export default MainLayout
