import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: () => ({
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      transitionProperty: 'none',
      bg: '#fafafa',
    },
    '#__next': {
      minH: '100vh',
      d: 'flex',
      flexDir: 'column',
    },
  }),
}

export default styles
