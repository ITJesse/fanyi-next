import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import theme from '@/lib/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
