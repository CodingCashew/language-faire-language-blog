import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg='gray.50' >
      <div className="footer">
        <Link href="/contact">
          <Text>Contact Us</Text>
        </Link>
      </div>
    </Box>
  );
}
