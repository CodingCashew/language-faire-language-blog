import type { AppProps } from "next/app";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#B794F4",
      main: "#9F7AEA",
      dark: "#553C9A",
    },
    secondary: {
      light: "#81E6D9",
      main: "#4FD1C5",
      dark: "#2C7A7B",
    },
    tertiary: {
      light: "#ECC94B",
      main: "#D69E2E",
      dark: "#ED8936",
    },
    // primary: {
    //   light: "#ED64A6",
    //   main: "#D53F8C",
    //   dark: "#97266D",
    // },
    // secondary: {
    //   light: "#ECC94B",
    //   main: "#D69E2E",
    //   dark: "#ED8936",
    // },
    // tertiary: {
    //   light: "#9F7AEA",
    //   main: "#805AD5",
    //   dark: "#553C9A",
    // },
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
