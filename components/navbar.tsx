import React from "react";
import {
  Box,
  Text,
  Image,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <Box bg="gray.50" minH={20}>
      <div className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image src="../logo1.png" alt="language blog logo" w="50px" />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" color="secondary.dark">
            Follow Your Heart English
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
          <Link href="/listening" className="links">
            <Text fontSize="xl" color="primary.main">
              Listening
            </Text>
          </Link>
          <Link href="/speaking" className="links">
            <Text fontSize="xl" color="primary.main">
              Speaking
            </Text>
          </Link>
          <Link href="/grammar" className="links">
            <Text fontSize="xl" color="primary.main">
              Grammar
            </Text>
          </Link>
          <Link href="/vocab" className="links">
            <Text fontSize="xl" color="primary.main">
              Vocabulary
            </Text>
          </Link>
          <Menu isLazy>
            <MenuButton className="links">
              <Text fontSize="xl" color="primary.main">
                Resources
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/resources">
                  <Text fontSize="lg">Resources</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/resources/pdf">
                  <Text fontSize="lg">Cheat Sheets</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/resources/games">
                  <Text fontSize="lg">English Games</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/resources/music">
                  <Text fontSize="lg">Learn with Music</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/resources/youtube">
                  <Text fontSize="lg">FYH English YouTube Videos</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/resources/podcast">
                  <Text fontSize="lg">FYH English Podcast</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link href="/articles" className="links">
            <Text fontSize="xl" color="primary.main">
              Blog
            </Text>
          </Link>
          <Link href="/login" className="links">
            <Text fontSize="xl">Log In</Text>
          </Link>
          <Link href="/signup" className="links">
            <Text fontSize="xl">Sign Up</Text>
          </Link>
          <Search2Icon className="search" boxSize={5} color="primary.main" />
        </div>
        {/* )} */}
      </div>
    </Box>
  );
}
