import {
  Container,
  Flex,
  Text,
  Button,
  Stack,
  Input,
  Image
} from "@chakra-ui/react";
import { useState } from "react";

export default function Newsletter() {
  const initialValues = {
    firstName: "",
    email: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addToMailingList = (e: any) => {
    if (values.firstName && values.email) {
      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
          email: values.email,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          alert("You successfully subscribed!");
          setValues(initialValues);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container maxW="5xl" minH="sm" pt={10}>
      <Flex>
      <Image src='/assets/chang-duong-Sj0iMtq_Z4w-unsplash.jpg' alt="friends in the sunset" maxW="md" m={5} pt={1}/>
      <Stack spacing={5} maxW="lg" pl={5}>
        <Text fontSize="2xl" mt={3}>
          Join Our Community
        </Text>
        <Text fontSize="lg" mb={3}>
          Want exclusive English tips delivered straight to your inbox?
          Subscribe to be the first to hear about new developments and other
          cool shit!
        </Text>
        <Input
          placeholder="First Name"
          size="md"
          bgColor="#F7FAFC"
          value={values.firstName}
          name={"firstName"}
          onChange={handleChange}
        />
        <Input
          placeholder="Email Address"
          size="md"
          bgColor="#F7FAFC"
          value={values.email}
          name={"email"}
          onChange={handleChange}
        />
        <Button
          onClick={addToMailingList}
          backgroundColor="primary.dark"
          color="white"
        >
          Join the Community
        </Button>
      </Stack>
      </Flex>
    </Container>
  );
}
