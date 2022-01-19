import React from 'react'
import { Box } from '@chakra-ui/react'
import { HomeBanner, ProductSection } from './components'

const Home = props => {
  return (
    <Box>
      <HomeBanner />
      <ProductSection title="LAPTOP GAMING - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC" />
      <ProductSection title="MÀN HÌNH KHUYẾN MÃI HOT - GIAO HÀNG MIỄN PHÍ" />
      <ProductSection title="LAPTOP VĂN PHÒNG - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC" />
    </Box>
  )
}

export default Home
