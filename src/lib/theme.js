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
  Heading: {
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
  grassTeal: '#88ccca',
  dark: { dark: '#2C3840' },
  red: { dark: '#F55446' },
  cyan: { dark: '#02569D' },
  grey: {
    dark: '#CBD5DD'
  },
  text: {
    gray: '#2C3840',
    light: '#CBD5DD'
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, colors, fonts })
export default theme
