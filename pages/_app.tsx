import type { AppProps } from "next/app";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#ED64A6",
      main: "#D53F8C",
      dark: "#97266D",
    },
    secondary: {
      light: "#ECC94B",
      main: "#D69E2E",
      dark: "#ED8936",
    },
    tertiary: {
      light: "#9F7AEA",
      main: "#805AD5",
      dark: "#553C9A",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Lato, sans-serif",
    mono: "Menlo, monospace",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
