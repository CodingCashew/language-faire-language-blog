import { useState } from 'react';
import { Box, Container, Text, Stack, Input, Button, Divider, Link, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChatIcon } from "@chakra-ui/icons"

const initialValues = {
  email: '',
  username: '',
  password: ''
}

function SignUp() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)


  // const [loggedIn, setLoggedIn] = useState(false);
  const [values, setValues] = useState(initialValues);
  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]:value,
    })
  }

  const createUser = (e: any) => {
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ email: values.email, username: values.username, password: values.password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert('You successfully created a new account')

        // setLoggedIn(true);
        // console.log("loggedIn?:", loggedIn)
        setValues({
          email: '',
          username: '',
          password: ''
        })
        // TO DO: redirect to href="/wall"
      })
      .catch((err) => console.log(err));
  }

  const oAuth = () => {
    alert('OAuth functionality in progress...')
  }

  return (
    <div>
      <Box
        bgGradient='linear(to-b, #B794F4, #4FD1C5)'
        bgColor="#4FD1C5"
        h="100%"
        w="100%"
        minH="3xl">
        <Container
          maxW="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center">
          <Text fontSize="2xl" color="white" paddingY="2rem" maxW="md" textAlign="center"><ChatIcon marginRight="1rem" />Start speaking English today with a free account. </Text>
          <Stack spacing={5} w="75%" >
            <Input
              placeholder='Email Address'
              size='md'
              bgColor="#F7FAFC"
              value={values.email}
              name={"email"}
              onChange={handleChange} />
            <Input
              placeholder='Username'
              size='md'
              bgColor="#F7FAFC"
              value={values.username}
              name={"username"}
              onChange={handleChange} />
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                bgColor="#F7FAFC"
                value={values.password}
                name={"password"}
                onChange={handleChange}
              />
              <InputRightElement width='4.5rem'>
                <Button
                  h='1.75rem'
                  size='sm'
                  bgColor="#E2E8F0"
                  onClick={handleShow}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button bgColor="#4FD1C5" color="white" onClick={createUser} >Sign Up Free</Button>
            {/* <Button bgGradient='linear(to-bl, #38B2AC, #805AD5)' color="white">Sign Up Free</Button> */}
            <Button variant="link" fontSize='xs' color="#718096" ><Link href="/login">Already Have An Account? Log In~</Link></Button>
            <Container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center">
              <Divider w="47%" bgColor="#718096"/>
              <Text color="#718096">or</Text>
              <Divider w="47%" bgColor="#718096"/>
            </Container>
            <Button bgColor="#B794F4" color="white" onClick={oAuth}>Continue with Google</Button>
            <Button bgColor="#B794F4" color="white" onClick={oAuth}>Continue with Facebook</Button>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default SignUp