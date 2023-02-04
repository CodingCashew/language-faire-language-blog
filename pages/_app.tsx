import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    teal: '#4FD1C5',
    teal2: '#81E6D9',
    teal3: '#2C7A7B',
    purple: '#9F7AEA',
    purple2: '#B794F4',
    purple3: '#553C9A',
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Lato, sans-serif",
    mono: "Menlo, monospace",
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
