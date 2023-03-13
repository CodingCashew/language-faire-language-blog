import { Container, Text, Flex, Image, Input, Stack } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { accountLinks } from "../components/sidebarLinks";
import { useState, useEffect } from "react";

export default function Account() {
  // const initialValues = {
  //   email: '',
  //   username: '',
  //   password: '',
  //   dob: ''
  //   // password: ''
  //   // password: ''
  // }
  let [avatar, setAvatar] = useState("");
  let [user, setUser] = useState();
  const getUser = async () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data.results:", data.results[0]);
        setAvatar(data.results[0].picture.large);
        setUser(data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="6xl">
        <Sidebar links={accountLinks} section={"account"} maxW="sm" />
        {avatar && (
          <Flex maxW="5xl" flexDirection="row">
            <Image boxSize="2xs" src={avatar} p={5} alt="profile image" />
            <Flex flexDirection="column" minW="3xl">
              <Text fontSize="xl" py={5}>
                User Profile
              </Text>
              <Text fontSize="md">Username</Text>
              <Input value={user.login.username} width="sm" disabled />
              <Text fontSize="md">Email Address</Text>
              <Input value={user.email} width="sm" disabled />
              <Text fontSize="md">Password</Text>
              <Input value={user.login.password} width="sm" disabled />
              <Text fontSize="md">Date of Birth</Text>
              <Input value={new Date(user.dob.date).toDateString()} disabled width="sm" />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Container>
  );
}
