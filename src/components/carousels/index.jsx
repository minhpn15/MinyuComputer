import React from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import Slider from 'react-slick'
import { Image } from '@chakra-ui/react'
import { ForwardArrow, BackArrow } from '@/assets/icons'
import slideshow_1 from '../../assets/banner/slideshow_1.webp'
import slideshow_2 from '../../assets/banner/slideshow_2.webp'
import slideshow_3 from '../../assets/banner/slideshow_3.webp'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const cards = [slideshow_1, slideshow_2, slideshow_3]

const Carousel = () => {
  const [slider, setSlider] = React.useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}
      borderRadius={'xl'}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="transparent"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BackArrow />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ForwardArrow />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image alt={index} src={url} bgSize={'cover'} />
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
