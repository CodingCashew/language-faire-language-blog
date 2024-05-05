import { Box, Flex, Link } from "@chakra-ui/react";
import {
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box bg="gray.50" className="footer">
      <Flex className="flexboxContainer" justify="center">
        <Link
          href="https://www.youtube.com/channel/UCXydaSU9SGHasOXBuYcgmkw"
          className="footerLinks"
        >
          <FaYoutube className="search" size={30} color="primary.main" />
        </Link>
        <Link
          href="https://www.instagram.com/langfaring/"
          className="footerLinks"
        >
          <FaInstagramSquare
            className="search"
            size={30}
            color="primary.main"
          />
        </Link>
        <Link href="https://twitter.com/langfaring" className="footerLinks">
          <FaXTwitter className="search" size={30} color="primary.main" />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61559502262551"
          className="footerLinks"
        >
          <FaMeta className="search" size={30} color="primary.main" />
        </Link>
        <Link
          href="https://buymeacoffee.com/langfaring"
          className="footerLinks"
        >
          <SiBuymeacoffee className="search" size={30} color="primary.main" />
        </Link>
      </Flex>
      {/* <Container className="flexboxContainer" maxW="2xl">
          <Link href="/contact" className="footerLinks"><Text fontSize='lg' className="footerText">Contact</Text></Link>
          <Link href="/newsletter" className="footerLinks"><Text fontSize='lg' className="footerText">Newsletter</Text></Link>
          <Link href="/privacy-policy" className="footerLinks"><Text fontSize='lg' className="footerText">Privacy Policy</Text></Link>
          <Link href="/terms-of-service" className="footerLinks"><Text fontSize='lg' className="footerText">Terms of Service</Text></Link>
      </Container> */}
    </Box>
  );
}
