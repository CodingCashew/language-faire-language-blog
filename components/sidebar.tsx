import React from "react";
import { Container, Text, Card, Link } from "@chakra-ui/react";

export interface LabelValue {
  label: string,
  value: string
}

export default function Sidebar({items}:any) {
  return (
    <Container maxW="2xs">
      <Card minH="sm" m={3}>
      {items.map((item:any, index:any) => (
        <Link href={`/resources/${item.value}`} key={index}><Text size="xl" m={4}>{item.label}</Text></Link>
      ))}
      </Card>
    </Container>
  );
}
