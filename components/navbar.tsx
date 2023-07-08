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
        {/* {isTabletOrMobile && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              size="lg"
              m={3}
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as="a" href="/listening">
                Listening
              </MenuItem>
              <MenuItem as="a" href="/speaking">
                Speaking
              </MenuItem>
              <MenuItem as="a" href="/grammar">
                Grammar
              </MenuItem>
              <MenuItem as="a" href="/vocab">
                Vocabulary
              </MenuItem>
              <MenuItem as="a" href="/resources">
                Resources
              </MenuItem>
              <MenuItem as="a" href="/articles">
                Blog
              </MenuItem>
            </MenuList>
          </Menu>
        )} */}
        {/* {isDesktopOrLaptop && ( */}
        <div className="mainLinksContainer">
          <Link href="/articles" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Articles
            </Text>
          </Link>
          <Link href="/contact" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Contact
            </Text>
          </Link>
        </div>
        {/* )} */}
      </div>
    </Box>
  );
}
