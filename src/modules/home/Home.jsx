import React from 'react'
import { Box } from '@chakra-ui/react'
import { HomeBanner, ProductSection } from './components'
import { LAPTOP, MONITOR, KEYBOARD } from '@/constant/mockData'

const sections = [
  {
    title: 'LAPTOP GAMING - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC',
    products: LAPTOP
  },
  {
    title: 'MÀN HÌNH GIÁ TỐT - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC',
    products: MONITOR
  },
  {
    title: 'BÀN PHÍM KHUYẾN MÃI HOT - GIAO HÀNG MIỄN PHÍ',
    products: KEYBOARD
  }
]

const Home = props => {
  return (
    <Box>
      <HomeBanner />
      {sections.map(section => (
        <ProductSection
          key={section.title}
          title={section.title}
          products={section.products}
        />
      ))}
    </Box>
  )
}

export default Home
