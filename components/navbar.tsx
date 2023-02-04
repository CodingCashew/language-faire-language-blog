import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import theme from "../pages/_app";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg='gray.50'>
      <div className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image src='../logo.png' alt="language blog logo" w='50px' />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" color="purple3">Best Language Blog Ever</Text>
        </Link>
        <div className="mainLinksContainer">
          <Link href="/blog" className="links">
            <Text fontSize="lg">Blog</Text>
          </Link>
          <Link href="/about" className="links">
            <Text fontSize="lg">About</Text>
          </Link>
          <Link href="/resources" className="links">
            <Text fontSize="lg">Resources</Text>
          </Link>
        </div>
      </div>
    </Box>
  );
}
