import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@/components/fonts'
import theme from '@/lib/theme'
import AppRoutes from './Routes'

const queryClient = new QueryClient()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence exitBeforeEnter initial>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default App
