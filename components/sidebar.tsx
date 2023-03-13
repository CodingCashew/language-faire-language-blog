import React from "react";
import { Container, Text, Card, Link } from "@chakra-ui/react";

export interface LabelValue {
  label: string,
  value: string
}



export default function Sidebar({links, section}:any) {
  return (
    <Container minW="2xs" maxW="xs">
      <Card minH="sm" m={3}>
      {links.map((item:any, index:any) => (
        <Link href={`/${section}/${item.value}`} key={index}><Text fontSize="lg" m={4}>{item.label}</Text></Link>
      ))}
      </Card>
    </Container>
  );
}
