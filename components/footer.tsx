import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { Box, Text, Link, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    // <Box bg='gray.50' >
    //   <div className="footer">
    //     <Link href="/contact">
    //       <Text>Contact Us</Text>
    //     </Link>
    //   </div>
    // </Box>
    <Box bg='gray.50' className="footer">
        <Container className="flexboxContainer" maxW="2xl" >
          <Link href="https://twitter.com/FYHEnglish" className="footerLinks"><FaTwitter className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.facebook.com/profile.php?id=100090833054137" className="footerLinks"><FaFacebookSquare className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.instagram.com/followyourheartenglish/" className="footerLinks"><FaInstagramSquare className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.youtube.com/channel/UCG63H0-Bonh51PvCDBmdyuw" className="footerLinks"><FaYoutube className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.buymeacoffee.com/fyhenglish" className="footerLinks"><SiBuymeacoffee className="search" size={35}  color="primary.main" /></Link>
          </Container>
          {/* <Container className="flexboxContainer" maxW="2xl">
          <Link href="/contact" className="footerLinks"><Text fontSize='lg' className="footerText">Contact</Text></Link>
          <Link href="/newsletter" className="footerLinks"><Text fontSize='lg' className="footerText">Newsletter</Text></Link>
          <Link href="/privacy-policy" className="footerLinks"><Text fontSize='lg' className="footerText">Privacy Policy</Text></Link>
          <Link href="/terms-of-service" className="footerLinks"><Text fontSize='lg' className="footerText">Terms of Service</Text></Link>
      </Container> */}
    </Box>
  );
}
