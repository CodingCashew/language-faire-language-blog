import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg="gray.50" minH={20}>
      <div className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image src="../logo.png" alt="language blog logo" width="50px" />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" color="primary.main">
            Langly
          </Text>
        </Link>
        <div className="mainLinksContainer">
          <Link href="/articles" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Articles
            </Text>
          </Link>
        </div>
      </div>
    </Box>
  );
}
