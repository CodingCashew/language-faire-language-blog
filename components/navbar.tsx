import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import theme from "../pages/_app";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg='gray.50'>
      <div className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image src='../logo1.png' alt="language blog logo" w='50px' />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" color="secondary.dark">Follow Your Heart English</Text>
        </Link>
        <div className="mainLinksContainer">
          <Link href="/listening" className="links">
            <Text fontSize="lg" color="primary.main">Listening</Text>
          </Link>
          <Link href="/speaking" className="links">
            <Text fontSize="lg" color="primary.main">Speaking</Text>
          </Link>
          {/* <Link href="/writing" className="links">
            <Text fontSize="lg" color="primary.main">Writing</Text>
          </Link>
          <Link href="/grammar" className="links">
            <Text fontSize="lg" color="primary.main">Grammar</Text>
          </Link> */}
          <Link href="/vocab" className="links">
            <Text fontSize="lg" color="primary.main">Vocabulary</Text>
          </Link>
          <Link href="/blog" className="links">
            <Text fontSize="lg" color="primary.main">Blog</Text>
          </Link>
        </div>
      </div>
    </Box>
  );
}