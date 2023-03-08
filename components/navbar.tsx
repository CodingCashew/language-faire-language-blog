import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Search2Icon } from '@chakra-ui/icons'



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
            <Text fontSize="xl" color="primary.main">Listening</Text>
          </Link>
          <Link href="/speaking" className="links">
            <Text fontSize="xl" color="primary.main">Speaking</Text>
          </Link>
          {/* <Link href="/writing" className="links">
            <Text fontSize="xl" color="primary.main">Writing</Text>
          </Link> */}
          <Link href="/grammar" className="links">
            <Text fontSize="xl" color="primary.main">Grammar</Text>
          </Link> 
          <Link href="/vocab" className="links">
            <Text fontSize="xl" color="primary.main">Vocabulary</Text>
          </Link>
          <Link href="/articles" className="links">
            <Text fontSize="xl" color="primary.main">Blog</Text>
          </Link>
          <Link href="/login" className="links"><Text fontSize='xl'>Log In</Text></Link>
          <Link href="/signup" className="links"><Text fontSize='xl'>Sign Up</Text></Link>
          <Search2Icon className="search" boxSize={5} color="primary.main" />
        </div>
      </div>
    </Box>
  );
}
