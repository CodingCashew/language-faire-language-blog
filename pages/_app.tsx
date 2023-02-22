import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      light: '#ED64A6',
      main: '#D53F8C',
      dark: '#97266D',
      // light: '#0BC5EA',
      // main: '#00A3C4',
      // dark: '#086F83',
    },
    secondary: {
      light: '#F6E05E',
      main: '#ECC94B',
      dark: '#D69E2E',
      // light: '#68D391',
      // main: '#38A169',
      // dark: '#276749',
    }
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
