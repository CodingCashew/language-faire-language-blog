import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Welcome to Khen Mini Market</h1>
      <Component {...pageProps} />
    </>
  )
}
