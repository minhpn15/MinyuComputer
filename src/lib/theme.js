import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffff', '#423C6C')(props)
    }
  })
}

const components = {
  Text: {
    baseStyle: {
      color: 'gray.700'
    }
  },
  Heading: {
    baseStyle: {
      color: '#2C3840'
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#EA3A3C', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Nunito',
  body: 'Nunito'
}

const colors = {
  grey: {
    dark: '#CBD5DD'
  },
  text: {
    gray: '#2C3840',
    light: '#CBD5DD'
  },
  gray: { 700: '#2C3840' }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, colors, fonts })
export default theme
