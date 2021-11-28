import 'focus-visible/dist/focus-visible'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/lib/theme'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
