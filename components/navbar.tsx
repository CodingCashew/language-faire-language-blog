import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg="gray.50" minH={{ base: 10, md: 15 }}>
      <Flex className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image
            src="../logo.png"
            alt="language blog logo"
            width="50px"
            className="logo"
          />
        </Link>
        <Link href="/" className="logo">
          <Text
            fontSize="2xl"
            color="primary.dark"
            display={{ base: "none", sm: "block" }}
          >
            LanguageFaire
          </Text>
        </Link>
        <div className="mainLinksContainer">
          <Link href="/articles" className="links">
            <Button fontSize="xl" color="secondary.dark" variant="link">
              Articles
            </Button>
          </Link>
        </div>
      </Flex>
    </Box>
  );
}
